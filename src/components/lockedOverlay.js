// components/LockedOverlay.js
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const LockedOverlay = ({ children }) => {
  return (
    <Box position="relative">
      {children}
      <Flex
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)"
        alignItems="center"
        justifyContent="center"
        zIndex="1"
        borderRadius="15px"
      >
        <Text color="white" fontSize="2xl" fontWeight="bold">
          Widget Locked
        </Text>
      </Flex>
    </Box>
  );
};

export default LockedOverlay;
