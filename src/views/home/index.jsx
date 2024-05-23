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
import { NavLink } from 'react-router-dom';
import ranker from "assets/mentorship.jpeg";
import studying from "assets/studying.mp4";

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
        <Box bg="rgba(0,0,0,0.6)" py={20} minHeight={500}>
          <Container maxW="container.lg">
            <Heading as="h1" size="2xl" color="white" mb={4}>
              Accelerate Your Growth with Personalized Mentorship
            </Heading>
            <Text fontSize="xl" color="white" mb={8}>
              Get one-on-one guidance from experienced mentors to reach your goals faster.
            </Text>
            <NavLink to="/auth/signin">
              <Button bg="purple.500" color="white" _hover={{ bg: "purple.700" }} size="lg">
                Get Started
              </Button>
            </NavLink>
          </Container>
        </Box>
      </Box>

      {/* About Section */}
      <Box bg="purple.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" color="purple.800" mb={8}>
            About Our Mentors
          </Heading>
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box flex="1" pr={8} mb={8}>
              <Image src={ranker} alt="Mentorship" maxH={200} maxW={200} />
            </Box>
            <Box flex="1">
              <Text fontSize="xl" color="purple.800">
                Our mentors are experienced professionals dedicated to helping you achieve your academic and career goals.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box bg="purple.300" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" color="white" mb={8}>
            Testimonials
          </Heading>
          {/* Testimonial Cards */}
          <Stack spacing={8}>
            <Box bg="purple.500" p={6} boxShadow="md" borderRadius="lg" color="white">
              <Text fontSize="xl">
                "The mentorship program helped me excel in my exams and beyond."
              </Text>
              <Text mt={4}>- Student 1</Text>
            </Box>
            <Box bg="purple.500" p={6} boxShadow="md" borderRadius="lg" color="white">
              <Text fontSize="xl">
                "I gained invaluable insights and guidance from my mentor."
              </Text>
              <Text mt={4}>- Student 2</Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Other Information Section */}
      <Box bg="purple.50" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" color="purple.800" mb={8}>
            Why Choose Us?
          </Heading>
          <Text fontSize="xl" color="purple.800">
            We provide personalized mentorship that is tailored to your individual needs, ensuring you receive the best guidance and support to succeed.
          </Text>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="purple.600" color="white" py={8} textAlign="center">
        <Text>&copy; 2024 JEE Elevate. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Home;
