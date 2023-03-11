import React, { Component } from "react";
import { Flex, Heading, Spacer } from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

export class Header extends Component {
  render() {
    return (
      <Flex
        bg="purple.600"
        p="6px 12px"
        alignItems="center"
        justifyContent="center"
      >
        <Flex maxW="1200px" w="90vw">
          <Heading fontWeight="extrabold">ResumeBuildr</Heading>
          <Spacer />
          <ThemeSwitcher />
        </Flex>
      </Flex>
    );
  }
}

export default Header;
