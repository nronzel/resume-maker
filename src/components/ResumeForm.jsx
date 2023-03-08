import { Flex, Heading } from "@chakra-ui/react";
import React, { Component } from "react";

export class ResumeForm extends Component {
  render() {
    return (
      <Flex
        direction="column"
        border="1px solid"
        borderColor="gray.700"
        p={5}
        borderRadius={5}
        w="80%"
        alignItems="center"
      >
        <Heading size="lg">Build Your Resume</Heading>
      </Flex>
    );
  }
}

export default ResumeForm;
