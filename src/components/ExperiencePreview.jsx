import { Divider, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import React, { Component } from "react";

class ExperiencePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Flex w="100%" direction="column">
        {this.props.experience.map((job) => {
          const { id, companyName, start, end, jobDescription, jobTitle } = job;
          return (
            <>
              <Flex w="100%" mb={3}>
                <Text
                  key={id}
                  fontSize="lg"
                  fontWeight="semibold"
                  color="blue.700"
                >
                  {jobTitle}
                </Text>
                <Spacer />
                <HStack h="25px">
                  <Text>{companyName}</Text>
                  <Divider orientation="vertical" />
                  <Text as="i" fontWeight="thin">
                    {start} - {end}
                  </Text>
                </HStack>
              </Flex>
              <Text fontSize="sm">{jobDescription}</Text>
            </>
          );
        })}
      </Flex>
    );
  }
}

export default ExperiencePreview;
