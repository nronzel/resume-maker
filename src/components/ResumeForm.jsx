import { Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import MainInfoSection from "./MainInfoSection";
import WorkExperience from "./WorkExperience";

export class ResumeForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Flex
        direction="column"
        border="1px solid"
        borderColor="gray.700"
        p={5}
        borderRadius={5}
        w="595px"
        alignItems="center"
        gap={4}
      >
        <MainInfoSection handleChange={this.props.handleChange} />
        <WorkExperience />
        {/* <Education /> */}
        {/* <Projects /> */}
      </Flex>
    );
  }
}

export default ResumeForm;
