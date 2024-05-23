import React, { useEffect, useState } from "react";
import { Container, Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "firebase.js"; // Import your Firestore configuration
import TestPage from "views/admin/testpage/index"; // Import the TestPage component

const TestList = () => {
  const [tests, setTests] = useState([]);
  const [selectedTestID, setSelectedTestID] = useState(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const testsCollection = collection(firestore, "tests");
        const testsSnapshot = await getDocs(testsCollection);
        const testsData = testsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTests(testsData);
      } catch (error) {
        console.error("Error fetching tests:", error);
      }
    };

    fetchTests();
  }, []);

  // Function to handle click on a test
  const handleTestClick = (testID) => {
    setSelectedTestID(testID);
  };

  return (
    <Container maxW="container.xl" mt={8}>
      <Heading mb={4}>Available Tests</Heading>
      {/* Render TestPage if a test is selected */}
      {selectedTestID ? (
        <TestPage testID={selectedTestID} />
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {tests.map((test) => (
            <Box
              key={test.id}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ transform: "scale(1.05)" }}
              onClick={() => handleTestClick(test.id)}
            >
              <Heading size="md" mb={2}>{test.name}</Heading>
              <Text>Syllabus: {test.syllabus}</Text>
              <Text>Date & Time: {test.dateTimeOfTest.toDate().toLocaleString()}</Text>
              {/* Add more details as needed */}
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default TestList;
