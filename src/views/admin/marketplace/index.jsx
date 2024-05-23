import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Banner from "views/admin/marketplace/components/Banner";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft5 from "assets/img/nfts/Nft5.png";

const plans = [
  {
    name: "Primary Plan",
    image: Nft3,
    price: "₹400",
    features: ["this is feature one", "this is feature two", "this is feature three"]
  },
  {
    name: "Gold Plan",
    image: Nft1,
    price: "₹600",
    features: ["this is feature one", "this is feature two", "this is feature three"]
  },
  {
    name: "Diamond Plan",
    image: Nft2,
    price: "₹800",
    features: ["this is feature one", "this is feature two", "this is feature three"]
  },
];

function PlanModal({ isOpen, onClose, plan }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{plan.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={plan.image} alt={plan.name} mb={4} />
          <Text fontSize="lg" mb={2}>Price: {plan.price}</Text>
          <Text fontWeight="bold" mb={2}>Features:</Text>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>
                <Text>{feature}</Text>
              </li>
            ))}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Buy Now</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default function Marketplace() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardBg = useColorModeValue("white", "navy.800");
  const cardShadow = useColorModeValue("sm", "dark-lg");

  const handleViewDetails = (plan) => {
    setSelectedPlan(plan);
    onOpen();
  };

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Our Pricing
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
              {plans.map((plan, index) => (
                <NFT
                  key={index}
                  name={plan.name}
                  image={plan.image}
                  price={plan.price}
                  buyLink="#"
                  f1={plan.features[0]}
                  f2={plan.features[1]}
                  f3={plan.features[2]}
                >
                  <Button mt={4} onClick={() => handleViewDetails(plan)}>
                    View Details
                  </Button>
                </NFT>
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 1 }} gap="20px" marginTop="2">
          <Flex
            flexDirection="column"
            gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
          >
            <Card p="0px" bg={cardBg} boxShadow={cardShadow}>
              <Flex
                align={{ sm: "flex-start", lg: "center" }}
                justify="space-between"
                w="100%"
                px="22px"
                py="18px"
              >
                <Text color={textColor} fontSize="xl" fontWeight="600">
                  Our Mentors
                </Text>
                <Button variant="action" colorScheme="blue">
                  See all
                </Button>
              </Flex>
              <HistoryItem
                name="Aishwary sir"
                author="Physics Mentor"
                image={Nft5}
                price="5/5"
              />
              <HistoryItem
                name="Niza ma'am"
                author="Chemistry Mentor"
                image={Nft1}
                price="5/5"
              />
            </Card>
          </Flex>
        </SimpleGrid>
      </Grid>
      {selectedPlan && (
        <PlanModal isOpen={isOpen} onClose={onClose} plan={selectedPlan} />
      )}
    </Box>
  );
}
