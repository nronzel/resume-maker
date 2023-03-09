import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { Component } from "react";

class ExperiencePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Flex w="100%" pt={3}>
        {this.props.experience.map((job) => {
          const { id, companyName, start, end, jobDescription, jobTitle } = job;
          return <Text key={id}></Text>;
        })}
      </Flex>
    );
  }
}

export default ExperiencePreview;
