import React, { useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { app } from "firebase.js";

import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import User from "model/user.js"; // Import the User model

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import DefaultAuth from "layouts/auth/Default";
import illustration from "assets/JEbanner.png";
import { FcGoogle } from "react-icons/fc";
import { addDoc, getFirestore, collection, query, where, getDocs } from "@firebase/firestore";

function SignIn() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const history = useHistory();
  const toast = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push("/admin");
      }
    });

    return () => unsubscribe();
  }, [auth, history]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const firestore = getFirestore(app);
      const usersRef = collection(firestore, "users");
      const q = query(usersRef, where("email", "==", result.user.email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        const newUser = new User(result.user.displayName, result.user.email, "00");
        await addDoc(usersRef, {
          name: newUser.name,
          email: newUser.email,
          coins: newUser.coins,
        });
      }

      // Navigate to a different page on successful sign-in
      history.push("/admin");
    } catch (error) {
      console.error(error);
      // Display toast notification on error
      toast({
        title: "Error",
        description: "Failed to sign in with Google.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const googleBg = useColorModeValue("purple.100", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "purple.200" },
    { bg: "whiteAlpha.200" }
  );

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Please select your Google account!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <Button
            onClick={signInWithGoogle}
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            bg={googleBg}
            color={googleText}
            fontWeight="500"
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}
          >
            <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
            Sign in with Google
          </Button>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
