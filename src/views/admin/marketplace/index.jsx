import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/marketplace/components/Banner";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft5 from "assets/img/nfts/Nft5.png";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Our Pricing
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <NFT
                name='Primary Plan'
                image={Nft3}
                price='₹400'
                buyLink='#'
                f1='this is feature one'
              f2='this is feature two'
              f3='this is feature three'
              />
             <NFT
                name='Gold Plan'
                image={Nft1}
                price='₹600'
                buyLink='#'
                f1='this is feature one'
              f2='this is feature two'
              f3='this is feature three'
              />
              <NFT
                name='Diamond Plan'
                image={Nft2}
                price='₹800'
                buyLink='#'
                f1='this is feature one'
              f2='this is feature two'
              f3='this is feature three'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
      <SimpleGrid columns={{ base: 1, md: 1}} gap='20px' marginTop="2">
      <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card p='0px'>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                Our mentors
              </Text>
              <Button variant='action'>See all</Button>
            </Flex>

            <HistoryItem
              name='Aishwary sir'
              author='Physics Mentor'
              image={Nft5}
              price='5/5'
            />
            <HistoryItem
              name="Niza ma'am"
              author='Chemistry Mentor'
              image={Nft1}
              price='5/5'
            />
          </Card>
        </Flex>

      </SimpleGrid>
      </Grid>
    </Box>
  );
}
