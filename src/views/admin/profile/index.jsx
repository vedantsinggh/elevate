// Chakra imports
import { Box, Grid, Text, VStack, Image, Button} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import {React, useState } from "react";

export default function Overview() {
    // Sample quiz data
    const quizData = [
      {
        question: "",
        image: "https://preview.redd.it/dpxm8utwis491.jpg?width=504&format=pjpg&auto=webp&s=2744b4b1536d9a3cf2f5196a337828b984555255",
        options: ["A", "B", "C", "D"],
      },
      {
        question: "",
        image: "https://i.ytimg.com/vi/qFM0mhpbmnQ/maxresdefault.jpg",
        options: ["A", "B", "C", "D"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What is the capital of France?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        question: "Which planet is known as the Red Planet?",
        image: "https://yt3.ggpht.com/rfknrwtDMXXQgM4-WVp9PZLAu6LLL114j3DNwFkj9ccnp1GNpN23310uBtqRBZ2VQXKlrbRs1w=s48-c-k-c0x00ffffff-no-rj",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
      },
      // Add more quiz data as needed
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
  
    const handleQuestionChange = (index) => {
      setCurrentQuestion(index);
    };
  
    const handleOptionSelect = (option) => {
      // Handle option selection logic here
      console.log("Selected option:", option);
    };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>

<Grid templateColumns="1fr 3fr" gap={8} p={8}>
      <Box>
        <VStack spacing={4}>
          {quizData.map((quiz, index) => (
            <Button
              key={index}
              onClick={() => handleQuestionChange(index)}
              colorScheme={currentQuestion === index ? "blue" : "gray"}
              variant="outline"
            >
              Question {index + 1}
            </Button>
          ))}
        </VStack>
      </Box>
      <Box>
        <VStack align="start" spacing={4}>
          <Text fontSize="xl">{quizData[currentQuestion].question}</Text>
          <Image src={quizData[currentQuestion].image} alt="Question Image" />
          {quizData[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleOptionSelect(option)}
              colorScheme="blue"
              variant="outline"
            >
              {option}
            </Button>
          ))}
        </VStack>
      </Box>
    </Grid>

    </Box>
  );
}
