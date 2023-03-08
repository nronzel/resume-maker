import React, { Component } from "react";
import { Heading } from "@chakra-ui/react";

export class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Heading
        color="gray.500"
        fontWeight="hairline"
        size="lg"
        textDecoration="underline"
        textDecorationThickness="1px"
      >
        Work Experience
      </Heading>
    );
  }
}

export default WorkExperience;
