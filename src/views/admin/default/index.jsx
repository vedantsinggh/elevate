import React, { useEffect, useState } from "react";
import { Box, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import Banner from "views/admin/marketplace/components/Banner";
import { FaFileCircleQuestion } from "react-icons/fa6";
import CheckTable from "views/admin/default/components/CheckTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import Tasks from "views/admin/default/components/Tasks";
import { columnsDataCheck } from "views/admin/default/variables/columnsData";
import { GrChapterAdd } from "react-icons/gr";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import { FaQuestion } from "react-icons/fa"; // Import the LockedOverlay component
import { app } from "firebase.js"; // Ensure this is your Firebase initialization file

export default function UserReports() {
  const [testCount, setTestCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  useEffect(() => {
    const fetchUserTestCount = async (userEmail) => {
      try {
        const usersRef = collection(firestore, "users");
        const q = query(usersRef, where("email", "==", userEmail));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const submittedDocsRef = collection(userDoc.ref, "submitted test");
          const submittedDocsSnapshot = await getDocs(submittedDocsRef);
          setTestCount(submittedDocsSnapshot.size);
        } else {
          setTestCount(0);
        }
      } catch (error) {
        console.error("Error fetching user test count:", error);
        setTestCount(0);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserTestCount(user.email);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, firestore]);

  if (loading) {
    return <div>Loading...</div>; // Optional: Add a loading state
  }

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap="20px" mb="20px">
        <Banner />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
        gap="20px"
        mb="20px"
      >
        <NavLink to={"/admin/test"}>
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={FaFileCircleQuestion}
                    color={brandColor}
                  />
                }
              />
            }
            name="Total Tests Taken"
            value={testCount}
          />
        </NavLink>
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={FaQuestion} color={brandColor} />
                }
              />
            }
            name="Questions solved"
            value="642"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={GrChapterAdd} color={brandColor} />
                }
              />
            }
            name="Chapter left"
            value="18"
          />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
          <DailyTraffic />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <Tasks />
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
      </SimpleGrid>
    </Box>
  );
}
