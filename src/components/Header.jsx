import React, { Component } from "react";
import { Flex, Heading, Spacer } from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";

export class Header extends Component {
  render() {
    return (
      <Flex bg="purple.600" p="6px 12px" alignItems="center">
        <Heading fontWeight="extrabold">ResumeBuildr</Heading>
        <Spacer />
        <ThemeSwitcher />
      </Flex>
    );
  }
}

export default Header;
