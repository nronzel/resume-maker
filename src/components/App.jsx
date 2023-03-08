import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <Flex h="100vh" direction="column" gap={5}>
        <Header />
        <MainSection />
        <Footer />
      </Flex>
    );
  }
}
