import React, { useState, useEffect } from "react";
import { Container, Grid, GridItem, Box, Text, Button, Heading, Image, Input } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "firebase.js"; // Import your Firestore configuration

const TestPage = () => {
  const [physicsQuestions, setPhysicsQuestions] = useState([]);
  const [chemistryQuestions, setChemistryQuestions] = useState([]);
  const [mathsQuestions, setMathsQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const testID = "qPHBaIgHlaTfaGuRojYU";


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const physicsQuestionsCollection = collection(firestore, "tests",testID, "physicsQuestions");
        const chemistryQuestionsCollection = collection(firestore, "tests", testID,"chemistryQuestions");
        const mathsQuestionsCollection = collection(firestore, "tests", testID,"mathsQuestions");

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
    setAnswer(null);
  };

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const isSubmitAnswerEnabled = () => {
    if (!selectedQuestion) return false;
    if (selectedQuestion.isInteger) {
      return answer !== null && answer.trim() !== "";
    } else {
      // For multiple choice questions
      return answer !== null;
    }
  };

  const handleSubmitAnswer = () => {
    // Logic to submit answer
    console.log("Answer submitted:", answer);
    // Reset answer after submission
    setAnswer(null);
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
              <Button
                key={index}
                variant="outline"
                onClick={() => setAnswer(option)}
                isActive={answer === option}
              >
                {option}
              </Button>
            ))}
          </Grid>
        )}
        {/* For integer type questions */}
        {selectedQuestion.isInteger && (
          <Input
            type="number"
            placeholder="Enter your answer"
            mb={4}
            onChange={handleInputChange}
            value={answer !== null ? answer : ""}
          />
        )}
        <Button
          onClick={handleSubmitAnswer}
          colorScheme="blue"
          size="sm"
          disabled={!isSubmitAnswerEnabled()}
        >
          Submit Answer
        </Button>
      </>
    );
  };

  return (
    <Container maxW="container.xl" mt={{ base: "60px", md: "80px" }}>
      <Grid templateColumns="3fr 1fr" gap={4}>
        {/* Left side: Display selected question */}
        <GridItem>
          {renderQuestionDetails()}
        </GridItem>
        {/* Right side: Display grid of question numbers */}
        <GridItem>
          <Heading mb={2} size="md">Question Grid</Heading>
          <Grid templateRows="repeat(3, 1fr)" gap={4}>
            {/* Physics questions */}
            <Box>
              <Heading mb={2} size="sm">Physics</Heading>
              <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                {physicsQuestions.slice(0, 30).map((question, index) => (
                  <Box
                    key={question.id}
                    p={1}
                    borderWidth="1px"
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => handleQuestionClick(question)}
                    height="40px"
                    textAlign="center"
                    lineHeight="40px" // vertically center content
                  >
                    {index + 1}
                  </Box>
                ))}
              </Grid>
            </Box>
            {/* Chemistry questions */}
            <Box>
              <Heading mb={2} size="sm">Chemistry</Heading>
              <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                {chemistryQuestions.slice(0, 30).map((question, index) => (
                  <Box
                    key={question.id}
                    p={1}
                    borderWidth="1px"
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => handleQuestionClick(question)}
                    height="40px"
                    textAlign="center"
                    lineHeight="40px" // vertically center content
                  >
                    {index + 1}
                  </Box>
                ))}
              </Grid>
            </Box>
            {/* Maths questions */}
            <Box>
              <Heading mb={2} size="sm">Maths</Heading>
              <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                {mathsQuestions.slice(0, 30).map((question, index) => (
                  <Box
                    key={question.id}
                    p={1}
                    borderWidth="1px"
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => handleQuestionClick(question)}
                    height="40px"
                    textAlign="center"
                    lineHeight="40px" // vertically center content
                  >
                    {index + 1}
                  </Box>
                ))}
              </Grid>
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
