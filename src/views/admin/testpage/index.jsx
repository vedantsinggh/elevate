import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import { Container, Grid, GridItem, Box, Text, Button, Heading, Image, Input } from "@chakra-ui/react";
import { collection, getDocs, doc, where, query, setDoc} from "firebase/firestore";
import { firestore } from "firebase.js"; // Import your Firestore configuration
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const TestPage = () => { // Remove testID from props

  console.log("in test ka tes");
  const { testID } = useParams(); // Use useParams to get the testID from the URL
  console.log(testID);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [physicsQuestions, setPhysicsQuestions] = useState([]);
  const [chemistryQuestions, setChemistryQuestions] = useState([]);
  const [mathsQuestions, setMathsQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [questionData, setQuestionData] = useState([]);
  
  const auth = getAuth();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const physicsQuestionsCollection = collection(firestore, "tests", testID, "physicsQuestions");
        const chemistryQuestionsCollection = collection(firestore, "tests", testID, "chemistryQuestions");
        const mathsQuestionsCollection = collection(firestore, "tests", testID, "mathsQuestions");

        const physicsQuestionsSnapshot = await getDocs(physicsQuestionsCollection);
        const chemistryQuestionsSnapshot = await getDocs(chemistryQuestionsCollection);
        const mathsQuestionsSnapshot = await getDocs(mathsQuestionsCollection);

        const physicsQuestionsData = physicsQuestionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const chemistryQuestionsData = chemistryQuestionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const mathsQuestionsData = mathsQuestionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        
        setPhysicsQuestions(physicsQuestionsData);
        setChemistryQuestions(chemistryQuestionsData);
        setMathsQuestions(mathsQuestionsData);

        // Create question data array when questions are fetched
        const allQuestions = [...physicsQuestionsData, ...chemistryQuestionsData, ...mathsQuestionsData];
        const initialQuestionData = allQuestions.map((question) => ({
          id: question.id,
          expectedAnswer: question.correctAnswer,
          userResponse: null, // Default user response is null
          visited: false // Default visited status is false
        }));
        setQuestionData(initialQuestionData);

        // Select the first question by default
        setSelectedQuestion(physicsQuestionsData[0]);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [testID]); // Add testID to dependency array

  const submitTest = async () => {
    try {
        if (!user) {
            console.error("No user is logged in.");
            return;
        }

        // Find the user document based on the current user's email
        const usersCollectionRef = collection(firestore, "users");
        const q = query(usersCollectionRef, where("email", "==", user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            // Update existing user document with question data
            const userDocRef = querySnapshot.docs[0].ref;
            
            // Get current timestamp
            const submittedTime = new Date();


            // Create "submitted test" document under user document
            await setDoc(doc(userDocRef, "submitted test", testID), {
                submittedTime: submittedTime,
                testData: questionData.map(question => ({
                    id: question.id,
                    expectedAnswer: question.expectedAnswer,
                    userResponse: question.userResponse,
                    visited: question.visited
                })),
                TestID: testID
            });

            setIsTestSubmitted(true);
            console.log("Test submitted successfully!");
        } else {
            // Handle case when user document doesn't exist
            console.error("User document not found.");
        }
    } catch (error) {
        console.error("Error submitting test:", error);
    }
};

  // Add an event listener for beforeunload event
  useEffect(() => {
    const beforeUnloadHandler = (event) => {
      // Check if the test has been submitted
      if (!isTestSubmitted) {
        // Cancel the event (prevent the browser from closing or navigating)
        event.preventDefault();
        // Chrome requires a return value to display a custom message
        event.returnValue = "Are you sure you want to leave? Your test has not been submitted.";
      }
    };

    window.addEventListener("beforeunload", beforeUnloadHandler);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, [isTestSubmitted]);

  const handleQuestionClick = (question) => {
    // Update selected question
    setSelectedQuestion(question);
  
    // Update visited status in questionData
    const updatedQuestionData = questionData.map((q) => {
      if (q.id === question.id) {
        return { ...q, visited: true };
      }
      return q;
    });
  
    // Set the updated questionData state
    setQuestionData(updatedQuestionData);
  
    // Reset answer
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
    // Update user response
    const updatedQuestionData = questionData.map((q) => {
      if (q.id === selectedQuestion.id) {
        return { ...q, userResponse: answer };
      }
      return q;
    });
  
    // Set the updated questionData state
    setQuestionData(updatedQuestionData);
  
    // Reset answer after submission
    setAnswer(null);
  };
  const renderQuestionDetails = () => {
    if (!selectedQuestion) return null;
    const options = ["A", "B", "C", "D"];
    const currentQuestionData = questionData.find((q) => q.id === selectedQuestion.id);
    
    return (
      <>
        <Heading mb={2} size="md">Difficulty: {selectedQuestion.difficultyLevel}</Heading>
        <Image src={selectedQuestion.question} alt="Question Image" maxHeight="600px" />
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
                // Pre-select the user's response if it's not null
                colorScheme={currentQuestionData && currentQuestionData.userResponse === option ? "green" : "gray"}
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
            // Pre-fill the input field with the user's response if it's not null
            value={answer !== null ? answer : (currentQuestionData && currentQuestionData.userResponse !== null ? currentQuestionData.userResponse : "")}
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
            {physicsQuestions.slice(0, 30).map((question, index) => {
              const currentQuestionData = questionData.find((q) => q.id === question.id);
              const isVisited = currentQuestionData ? currentQuestionData.visited : false;
              const userResponse = currentQuestionData ? currentQuestionData.userResponse : null;

              return (
                <Box
                  key={question.id}
                  p={1}
                  borderWidth="1px"
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => handleQuestionClick(question)}
                  height="40px"
                  textAlign="center"
                  lineHeight="40px"
                  bg={(selectedQuestion && selectedQuestion.id === question.id) ? "yellow.200" : (isVisited ? (userResponse ? "green.200" : "red.200") : "transparent")}
                >
                  {index + 1}
                </Box>
              );
            })}
          </Grid>
        </Box>
        {/* Chemistry questions */}
        <Box>
          <Heading mb={2} size="sm">Chemistry</Heading>
          <Grid templateColumns="repeat(10, 1fr)" gap={2}>
            {chemistryQuestions.slice(0, 30).map((question, index) => {
              const currentQuestionData = questionData.find((q) => q.id === question.id);
              const isVisited = currentQuestionData ? currentQuestionData.visited : false;
              const userResponse = currentQuestionData ? currentQuestionData.userResponse : null;

              return (
                <Box
                  key={question.id}
                  p={1}
                  borderWidth="1px"
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => handleQuestionClick(question)}
                  height="40px"
                  textAlign="center"
                  lineHeight="40px"
                  bg={(selectedQuestion && selectedQuestion.id === question.id) ? "yellow.200" : (isVisited ? (userResponse ? "green.200" : "red.200") : "transparent")}
                >
                  {index + 1}
                </Box>
              );
            })}
          </Grid>
        </Box>
        {/* Maths questions */}
        <Box>
          <Heading mb={2} size="sm">Maths</Heading>
          <Grid templateColumns="repeat(10, 1fr)" gap={2}>
            {mathsQuestions.slice(0, 30).map((question, index) => {
              const currentQuestionData = questionData.find((q) => q.id === question.id);
              const isVisited = currentQuestionData ? currentQuestionData.visited : false;
              const userResponse = currentQuestionData ? currentQuestionData.userResponse : null;

              return (
                <Box
                  key={question.id}
                  p={1}
                  borderWidth="1px"
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => handleQuestionClick(question)}
                  height="40px"
                  textAlign="center"
                  lineHeight="40px"
                  bg={(selectedQuestion && selectedQuestion.id === question.id) ? "yellow.200" : (isVisited ? (userResponse ? "green.200" : "red.200") : "transparent")}
                >
                  {index + 1}
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </GridItem>
  </Grid>
  <Button mt={4} colorScheme="blue" size="sm" onClick={submitTest}>
    Submit Test
  </Button>
</Container>
  );
};

export default TestPage;
