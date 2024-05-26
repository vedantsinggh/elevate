
 // Import the TestimonialSection component
 import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  Container,
  Badge,
  Divider,
  Avatar,Input, Textarea, useColorModeValue
} from '@chakra-ui/react';
import {Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import { FaQuestionCircle } from 'react-icons/fa'; // Import icons from react-icons library
import faqImage1 from 'assets/img/nfts/Nft5.png'; // Import FAQ image (replace with actual image)
import faqImage2 from 'assets/img/nfts/Nft5.png'; 
import { FaTrophy, FaChartLine, FaUserCheck } from 'react-icons/fa'; // Import icons from react-icons library
import {  Grid, GridItem, Icon } from '@chakra-ui/react';
import { FaAward } from 'react-icons/fa';

import { FaStar, FaCheckCircle, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ranker from "assets/mentorship.jpeg";
import studying from "assets/studying.mp4";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay } from 'swiper';
import image1 from "assets/img/nfts/Nft1.png";
import image2 from "assets/img/nfts/Nft2.png";
import image3 from "assets/img/nfts/Nft3.png";
import { FaCalendarAlt, FaUserTie } from 'react-icons/fa'; // Import icons from react-icons library
import sessionImage from "assets/img/nfts/Nft5.png";
SwiperCore.use([Autoplay]);

const PriceCard = ({ title, price, features, actionText, image }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" margin={2} padding={6} bgGradient="linear(to-b, #ffffff, #f7f7f7)">
      <Box>
        <Badge colorScheme="purple" mb={2}>
          <FaAward /> Best Value
        </Badge>
        <img src={image} alt="Product" style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover', margin: 'auto' }} />
        <Heading as="h3" size="lg" mb={2} textAlign="center">{title}</Heading>
        <Text fontSize="xl" color="gray.600" textAlign="center" mb={4}>{price}</Text>
        <Box mb={4}>
          {features.map((feature, index) => (
            <Text key={index} textAlign="center">{feature}</Text>
          ))}
        </Box>
        <Flex justifyContent="center">
          <Button colorScheme="purple">{actionText}</Button>
        </Flex>
      </Box>
    </Box>
  );
};

const themeColor = "#7142bd";
const lightThemeColor = "#d6c8f0";
const darkThemeColor = "#5b2c91";
const backgroundColor = "#f9f4fc";
const accentColor = "#a586e8";
const mentors = [
  {
    name: 'Mentor 1',
    expertise: 'Expert in Math and Science',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    badge: 'Specialist',
  },
  {
    name: 'Mentor 2',
    expertise: 'Specialist in English and History',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    badge: 'Specialist',
  },
  {
    name: 'Mentor 3',
    expertise: 'Professional Career Coach',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    badge: 'Specialist',
  },
  {
    name: 'Mentor 4',
    expertise: 'Professional Sex Coach',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    badge: 'Sexist',
  },
];

const priceOptions = [
  {
    title: 'Basic Batch',
    price: '$199',
    features: [
      'Access to all basic resources and group sessions',
      '📚 Personalized study plans',
      '🎓 Expert mentorship',
    ],
    actionText: 'Buy Now',
    image: image1,
  },
  {
    title: 'Pro Batch',
    price: '$299',
    features: [
      'Access to all basic resources and group sessions',
      '📚 Personalized study plans',
      '🎓 Expert mentorship',
      '💬 24/7 support',
    ],
    actionText: 'Buy Now',
    image: image2,
  },
  {
    title: 'Premium Batch',
    price: '$499',
    features: [
      'Includes everything in Basic plus one-on-one sessions',
      '📚 Personalized study plans',
      '🎓 Expert mentorship',
      '💬 24/7 support',
      '🏆 Priority access',
    ],
    actionText: 'Buy Now',
    image: image3,
  },
];
const Home = () => {
  const badgeBgColor = useColorModeValue('purple.500', 'purple.300');
  const bgColor = useColorModeValue('#f9f9f9', '#1a202c'); // Background color based on color mode
  const textColor = useColorModeValue('#333333', '#f9f9f9');
  return (
    <Box>
      {/* Hero Section */}
      <Box position="relative">
        {/* Background Video */}
        <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
          <source src={studying} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <Box bg="rgba(0,0,0,0.6)" py={{ base: 20, md: 40 }} minHeight="500px">
          <Container maxW="container.lg">
            <Heading as="h1" size="2xl" color="white" mb={4} textAlign="center">
              Accelerate Your Growth with Personalized Mentorship
            </Heading>
            <Text fontSize="xl" color="white" mb={8} textAlign="center">
              Get one-on-one guidance from experienced mentors to reach your goals faster.
            </Text>
            <Flex justifyContent="center">
              <NavLink to="/auth/signin">
                <Button bg={accentColor} color="white" _hover={{ bg: darkThemeColor }} size="lg">
                  Get Started
                </Button>
              </NavLink>
            </Flex>
          </Container>
        </Box>
      </Box>

      {/* About Section */}
      <Box bg="#d6c8f0" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="#5b2c91" mb={8} textAlign="center">
          About Our Success
        </Heading>
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <Box flex="1" pr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }} textAlign="center">
            <Image src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" alt="Student" maxH={200} maxW={200} mx="auto" borderRadius="full" boxShadow="md" />
            <Text mt={4} fontSize="lg" fontWeight="bold" color="#5b2c91">
              "The mentorship program transformed my academic journey. I am now more confident and motivated to excel in my studies."
            </Text>
          </Box>
          <Box flex="1">
            <Text fontSize="xl" color="#5b2c91" textAlign={{ base: 'center', md: 'left' }} mb={4}>
              We are proud to be recognized for our achievements:
            </Text>
            <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
              <Box mr={4} mb={4}>
                <Badge colorScheme="purple" variant="solid" bg={badgeBgColor} py={2} px={3} mb={2}>
                  <FaTrophy size={16} style={{ marginRight: '0.5rem' }} />
                  Top Performer
                </Badge>
                <Text fontSize="md">Consistently ranked as a top performer in mentorship programs.</Text>
              </Box>
              <Box mr={4} mb={4}>
                <Badge colorScheme="purple" variant="solid" bg={badgeBgColor} py={2} px={3} mb={2}>
                  <FaChartLine size={16} style={{ marginRight: '0.5rem' }} />
                  High Success Rate
                </Badge>
                <Text fontSize="md">Proven track record of helping students achieve their academic goals.</Text>
              </Box>
              <Box>
                <Badge colorScheme="purple" variant="solid" bg={badgeBgColor} py={2} px={3} mb={2}>
                  <FaUserCheck size={16} style={{ marginRight: '0.5rem' }} />
                  Trusted Mentorship
                </Badge>
                <Text fontSize="md">Trusted by thousands of students for personalized mentorship and guidance.</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>

      {/* Features Section */}
      <Box bg="#f9f4fc" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="#5b2c91" mb={8} textAlign="center">
          Features
        </Heading>
        <Flex justifyContent="space-around" flexWrap="wrap">
          <Box textAlign="center" p={5} maxW="300px">
            <Heading as="h3" size="lg" color="#7142bd" mb={4}>Personalized Plans</Heading>
            <Text color="#5b2c91">Customized mentorship plans to fit your unique needs and goals.</Text>
          </Box>
          <Box textAlign="center" p={5} maxW="300px">
            <Heading as="h3" size="lg" color="#7142bd" mb={4}>Expert Mentors</Heading>
            <Text color="#5b2c91">Get guidance from mentors with proven expertise and experience.</Text>
          </Box>
          <Box textAlign="center" p={5} maxW="300px">
            <Heading as="h3" size="lg" color="#7142bd" mb={4}>Flexible Scheduling</Heading>
            <Text color="#5b2c91">Convenient scheduling options to fit your busy lifestyle.</Text>
          </Box>
        </Flex>
      </Container>
    </Box>

    <Box bg="#f9f4fc" py={24}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="#5b2c91" mb={12} textAlign="center">
          Meet the Mentors
        </Heading>
        <Flex justifyContent="space-evenly" flexWrap="wrap">
          {mentors.map((mentor, index) => (
            <Box
              key={index}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              m={6}
              p={8}
              position="relative"
              transition="transform 0.3s"
              _hover={{ transform: 'translateY(-10px)', transition: 'transform 0.3s' }}
            >
              <Box
                bgGradient="linear(to-t, purple.300, transparent)"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={0}
                borderRadius="inherit"
              />
              <Avatar
                src={mentor.imageUrl}
                alt={mentor.name}
                size="2xl"
                mx="auto"
                mb={6}
                position="relative"
                zIndex={1}
              />
              <Box textAlign="center" position="relative" zIndex={1}>
                <Heading as="h3" size="lg" mb={2} color="#5b2c91">
                  {mentor.name}
                </Heading>
                <Text fontSize="md" color="gray.600" mb={4}>
                  {mentor.expertise}
                </Text>
                <Badge colorScheme="purple" variant="solid" bg={badgeBgColor} px={3} py={1}>
                  {mentor.badge}
                </Badge>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>

    <Box bg={bgColor} py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="#5b2c91" mb={8} textAlign="center">
          Book a Session
        </Heading>
        <Flex justifyContent="space-around" alignItems="center" flexWrap="wrap">
          <Box flex="1" pr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }} textAlign="center">
            <Box position="relative" borderRadius="lg" overflow="hidden" boxShadow="lg">
              <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
                <Image src={sessionImage} alt="Session" h="100%" w="100%" objectFit="cover" />
              </Box>
              <Box bg="rgba(0, 0, 0, 0.5)" position="absolute" top={0} left={0} right={0} bottom={0} zIndex={1} />
              <Box zIndex={2} position="relative" p={6}>
                <Heading as="h3" size="lg" color="white" mb={4}>
                  Personalized Mentorship Session
                </Heading>
                <Text color="white" mb={4}>
                  Book a one-on-one session with our experienced mentors to receive personalized guidance tailored to your needs.
                </Text>
                <Flex justifyContent="center">
                  <Button colorScheme="purple" leftIcon={<FaCalendarAlt />} mr={4}>
                    Book Now
                  </Button>
                  {/* <Button colorScheme="purple" leftIcon={<FaUserTie />} variant="outline">
                    Learn More
                  </Button> */}
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box flex="1">
            <Text fontSize="xl" color={textColor} textAlign={{ base: 'center', md: 'left' }} mb={4}>
              Need personalized guidance to achieve your goals?
            </Text>
            <Text fontSize="lg" color={textColor} textAlign={{ base: 'center', md: 'left' }} mb={4}>
              Our mentorship sessions are designed to provide you with the support and guidance you need to succeed.
            </Text>
            <Text fontSize="lg" color={textColor} textAlign={{ base: 'center', md: 'left' }}>
              Book a session now and take the first step towards your success!
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>

      {/* Testimonial Section */}
      <Box bg="#a586e8" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="white" mb={8} textAlign="center">
          Testimonials
        </Heading>
        <Swiper spaceBetween={30} slidesPerView={1} autoplay={{ delay: 1000}}>
          <SwiperSlide>
            <Box bg="#5b2c91" p={6} boxShadow="md" borderRadius="lg" color="white" textAlign="center">
              <Text fontSize="xl">
                "The mentorship program helped me excel in my exams and beyond."
              </Text>
              <Text mt={4}>- Student 1</Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box bg="#5b2c91" p={6} boxShadow="md" borderRadius="lg" color="white" textAlign="center">
              <Text fontSize="xl">
                "I gained invaluable insights and guidance from my mentor."
              </Text>
              <Text mt={4}>- Student 2</Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box bg="#5b2c91" p={6} boxShadow="md" borderRadius="lg" color="white" textAlign="center">
              <Text fontSize="xl">
                "The personalized approach made all the difference."
              </Text>
              <Text mt={4}>- Student 3</Text>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>

      {/* Pricing Section */}
      <Box bg="#f9f4fc" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="#5b2c91" mb={8} textAlign="center">
          Pricing
        </Heading>
        <Flex justifyContent="space-around" flexWrap="wrap">
          {priceOptions.map((option, index) => (
            <PriceCard
              key={index}
              title={option.title}
              price={option.price}
              features={option.features}
              actionText={option.actionText}
              image={option.image}
            />
          ))}
        </Flex>
      </Container>
    </Box>

      {/* Other Information Section */}
      <Box bg="#ece4f8" py={20}>
        <Container maxW="container.lg">
        <Box bg="#ece4f8" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="#5b2c91" mb={8} textAlign="center">
          Why Choose Us?
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} justifyContent="center">
          <GridItem>
            <Box textAlign="center">
              <Icon as={FaStar} color="#7142bd" boxSize={10} mb={4} />
              <Heading as="h3" size="lg" mb={2}>Quality</Heading>
              <Text color="#5b2c91">We strive for excellence in everything we do.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign="center">
              <Icon as={FaCheckCircle} color="#7142bd" boxSize={10} mb={4} />
              <Heading as="h3" size="lg" mb={2}>Reliability</Heading>
              <Text color="#5b2c91">You can count on us to deliver what we promise.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign="center">
              <Icon as={FaHeart} color="#7142bd" boxSize={10} mb={4} />
              <Heading as="h3" size="lg" mb={2}>Passion</Heading>
              <Text color="#5b2c91">We are passionate about helping you succeed.</Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
        </Container>
      </Box>

      <Box bg="#f9f9f9" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="#5b2c91" mb={8} textAlign="center">
          Frequently Asked Questions
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton _focus={{ outline: 'none' }} _hover={{ bg: '#eaeaea' }}>
              <Box flex="1" textAlign="left">
                <Icon as={FaQuestionCircle} boxSize={6} color="#5b2c91" mr={2} />
                How do I sign up for the mentorship program?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Signing up for the mentorship program is easy! Simply navigate to the Sign Up page, fill out the required information, and follow the prompts to create your account.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton _focus={{ outline: 'none' }} _hover={{ bg: '#eaeaea' }}>
              <Box flex="1" textAlign="left">
                <Icon as={FaQuestionCircle} boxSize={6} color="#5b2c91" mr={2} />
                What subjects are covered in the mentorship program?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Our mentorship program covers a wide range of subjects, including Math, Science, English, History, and more. Our experienced mentors are here to provide support and guidance in any subject you need help with.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton _focus={{ outline: 'none' }} _hover={{ bg: '#eaeaea' }}>
              <Box flex="1" textAlign="left">
                <Icon as={FaQuestionCircle} boxSize={6} color="#5b2c91" mr={2} />
                How often are mentorship sessions held?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Mentorship sessions are typically held on a weekly or bi-weekly basis, depending on your availability and the schedule of your assigned mentor. You can discuss session frequency and timing with your mentor to find a schedule that works best for you.
            </AccordionPanel>
          </AccordionItem>
          {/* Add more FAQ items as needed */}
        </Accordion>
        <Flex justifyContent="center" mt={10}>
          <Box mr={4}>
            <Image src={faqImage1} alt="FAQ Image 1" maxW="300px" borderRadius="lg" boxShadow="md" />
            <Text mt={2} textAlign="center">FAQ Image 1 Caption</Text>
          </Box>
          <Box>
            <Image src={faqImage2} alt="FAQ Image 2" maxW="300px" borderRadius="lg" boxShadow="md" />
            <Text mt={2} textAlign="center">FAQ Image 2 Caption</Text>
          </Box>
        </Flex>
      </Container>
    </Box>


      <Box bg="#5b2c91" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" color="white" mb={8} textAlign="center">
          Contact Us
        </Heading>
        <Flex justifyContent="center" alignItems="center">
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md" textAlign="center">
            <Text fontSize="lg" color="#5b2c91" mb={4}><strong>Email:</strong> contact@example.com</Text>
            <Text fontSize="lg" color="#5b2c91" mb={4}><strong>Phone:</strong> +1234567890</Text>
            <Text fontSize="lg" color="#5b2c91" mb={4}><strong>Address:</strong> 123 Main Street, City, Country</Text>
            <Text fontSize="lg" color="#5b2c91"><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</Text>
          </Box>
        </Flex>
      </Container>
    </Box>

      {/* Footer */}
      <Box bg={darkThemeColor} color="white" py={8} textAlign="center">
        <Text>&copy; 2024 JEE Elevate. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Home;
