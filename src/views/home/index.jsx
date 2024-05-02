import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  Container,
  Stack,
  Divider,
} from '@chakra-ui/react';

import ranker from "assets/mentorship.jpeg"
import studying from "assets/studying.mp4"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
  return (
    <Box>
      <Box position="relative">
      {/* Background Video */}
      <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
        <source src={studying} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Box bg="rgba(0,0,0,0.5)" py={20} minHeight={500}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" color="white" mb={4}>
            Accelerate Your Growth with Personalized Mentorship
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            Get one-on-one guidance from experienced mentors to reach your goals faster.
          </Text>
          <NavLink to="/auth/signin">
          <Button colorScheme="orange" size="lg">
            Get Started
          </Button>
          </NavLink>
        </Container>
      </Box>
    </Box>

      {/* About Section */}
      <Box bg="blue.700" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            About Our Mentors
          </Heading>
          <Flex justifyContent="center" alignItems="center">
            <Box flex="1" pr={8}>
              <Image src={ranker} alt="Mentorship" maxH={200} maxW={200}/>
            </Box>
            <Box flex="1" >
              <Text fontSize="xl">
                Maa chod denge 🔥🔥
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Box flex="1" pr={8}>
              <Text fontSize="xl">
              Maa chod denge 🔥🔥
              </Text>
            </Box>
            <Box flex="1" >
              <Image src={ranker} alt="Mentorship" maxH={200} maxW={200}/>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box bg="linkedin.900" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Testimonials
          </Heading>
          {/* Testimonial Cards */}
          {/* You can map through your testimonial data and display cards */}
          <Stack spacing={8}>
            <Box bg="gray.400" p={6} boxShadow="md" borderRadius="lg">
              <Text fontSize="xl">
                "JEE ki gand tod di bhaiya didi ne 🔥🔥"
              </Text>
              <Text mt={4}>- Student 1</Text>
            </Box>
            <Box bg="gray.400" p={6} boxShadow="md" borderRadius="lg">
              <Text fontSize="xl">
                "JEE ki gand tod di bhaiya didi ne 🔥🔥"
                  </Text>
              <Text mt={4}>- Student 2</Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Other Information Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Other Information
          </Heading>
          <Text fontSize="xl">
            Aag laga denge. 🔥🔥🔥🔥🔥🔥
          </Text>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="blue.500" color="white" py={8} textAlign="center">
        <Text>&copy; 2024 JEE Elevate. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Home;
