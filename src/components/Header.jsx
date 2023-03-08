import React, { Component } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";

export class Header extends Component {
  render() {
    return (
      <Flex bg="cyan.800" p="6px 12px">
        <Heading fontWeight={800} flexGrow="1">
          ResumeBuilder
        </Heading>
        <ThemeSwitcher />
      </Flex>
    );
  }
}

export default Header;
