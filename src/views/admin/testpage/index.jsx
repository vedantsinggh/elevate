import React, { useState, useEffect } from "react";
import { Container, Grid, GridItem, Box, Text, Button, Heading, Image, Input } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "firebase.js"; // Import your Firestore configuration

const TestPage = () => {
  const [physicsQuestions, setPhysicsQuestions] = useState([]);
  const [chemistryQuestions, setChemistryQuestions] = useState([]);
  const [mathsQuestions, setMathsQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const physicsQuestionsCollection = collection(firestore, "tests","waXi53C05xbsS3Z41GEE", "physicsQuestions");
        const chemistryQuestionsCollection = collection(firestore, "tests", "waXi53C05xbsS3Z41GEE","chemistryQuestions");
        const mathsQuestionsCollection = collection(firestore, "tests", "waXi53C05xbsS3Z41GEE","mathsQuestions");

        const physicsQuestionsSnapshot = await getDocs(physicsQuestionsCollection);
        const chemistryQuestionsSnapshot = await getDocs(chemistryQuestionsCollection);
        const mathsQuestionsSnapshot = await getDocs(mathsQuestionsCollection);

        const physicsQuestionsData = physicsQuestionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const chemistryQuestionsData = chemistryQuestionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const mathsQuestionsData = mathsQuestionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setPhysicsQuestions(physicsQuestionsData);
        setChemistryQuestions(chemistryQuestionsData);
        setMathsQuestions(mathsQuestionsData);
        // Select the first question by default
        setSelectedQuestion(physicsQuestionsData[0]);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);


  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const renderQuestionDetails = () => {
    if (!selectedQuestion) return null;
    const options = ["A", "B", "C", "D"];
    return (
      <>
        <Heading mb={2} size="md">Difficulty: {selectedQuestion.difficultyLevel}</Heading>
        <Image src={selectedQuestion.question} alt="Question Image" maxHeight="300px" />
        <Text mb={2}>{selectedQuestion.questionText}</Text>
        {/* For multiple choice questions */}
        {!selectedQuestion.isInteger && (
          <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={4}>
            {options.map((option, index) => (
              <Button key={index} variant="outline">{option}</Button>
            ))}
          </Grid>
        )}
        {/* For integer type questions */}
        {selectedQuestion.isInteger && (
          <Input type="number" placeholder="Enter your answer" mb={4} />
        )}
      </>
    );
  };
  return (
    <Container maxW="container.xl" mt={{ base: "60px", md: "80px" }}>
      <Grid templateColumns="3fr 1fr" gap={4}>
        {/* Left side: Display selected question */}
        <GridItem>
          {/* <Heading mb={2} size="md">Selected Question</Heading> */}
          {renderQuestionDetails()}
        </GridItem>
        {/* Right side: Display grid of question numbers */}
        <GridItem alignSelf="flex-start" position="sticky" top="80px">
          <Heading mb={2} size="md">Question Grid</Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {/* Physics questions */}
            <Box>
              <Heading mb={2} size="sm">Physics</Heading>
              {physicsQuestions.map((question, index) => (
                <Box
                  key={question.id}
                  p={1}
                  borderWidth="1px"
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => handleQuestionClick(question)}
                  height="50px"
                  width="50px"
                  textAlign="center"
                  lineHeight="50px" // vertically center content
                >
                  {index + 1}
                </Box>
              ))}
            </Box>
            {/* Chemistry questions */}
            <Box>
              <Heading mb={2} size="sm">Chemistry</Heading>
              {chemistryQuestions.map((question, index) => (
                <Box
                  key={question.id}
                  p={1}
                  borderWidth="1px"
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => handleQuestionClick(question)}
                  height="50px"
                  width="50px"
                  textAlign="center"
                  lineHeight="50px"  // vertically center content
                >
                  {index + 1}
                </Box>
              ))}
            </Box>
            {/* Maths questions */}
            <Box>
              <Heading mb={2} size="sm">Maths</Heading>
              {mathsQuestions.map((question, index) => (
                <Box
                  key={question.id}
                  p={1}
                  borderWidth="1px"
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => handleQuestionClick(question)}
                  height="50px"
                  width="50px"
                  textAlign="center"
                  lineHeight="50px" // vertically center content
                >
                  {index + 1}
                </Box>
              ))}
            </Box>
          </Grid>
        </GridItem>
      </Grid>
      <Button mt={4} colorScheme="blue" size="sm">
        Submit Test
      </Button>
    </Container>
  );
};

export default TestPage;