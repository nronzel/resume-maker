import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <Flex h="100vh" direction="column">
        <Header />
        {/* <ResumeForm /> */}
        {/* <ResumePreview /> */}
      </Flex>
    );
  }
}
