import React, { Component } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import Header from "./Header.jsx";
import MainSection from "./MainSection.jsx";
import Footer from "./Footer.jsx";

export default class App extends Component {
  render() {
    return (
      <Flex h="100dvh" direction="column" gap={5}>
        <Header />
        <MainSection />
        <Spacer />
        <Footer />
      </Flex>
    );
  }
}
