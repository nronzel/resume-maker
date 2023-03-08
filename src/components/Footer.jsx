import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex justifyContent="center" alignItems="center" h="50px">
      <Text color={useColorModeValue("gray.400", "gray.600")}>
        nronzel &copy; 2023 All Rights Reserved{" "}
      </Text>
    </Flex>
  );
}

export default Footer;
