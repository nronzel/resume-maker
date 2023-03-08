import { Center, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Center h="50px" w="100%" position="absolute" bottom="0">
      <Text color={useColorModeValue("gray.400", "gray.600")}>
        nronzel &copy; 2023 All Rights Reserved{" "}
      </Text>
    </Center>
  );
}

export default Footer;
