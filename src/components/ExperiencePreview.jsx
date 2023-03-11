import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import React, { Component } from "react";

class ExperiencePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, companyName, start, end, jobDescription, jobTitle } =
      this.props.experience;
    return (
      <Flex w="100%" direction="column" key={id} id={id} mb={3}>
        <Box>
          <Flex w="100%" mb={3} mt={2} alignItems="center">
            <Text fontSize="lg" fontWeight="semibold" color="blue.700">
              {jobTitle}
            </Text>
            <Spacer />
            <HStack>
              <Text color="gray.500">{companyName}</Text>
              <Text fontWeight="thin">|</Text>
              <Text as="i" fontWeight="thin">
                {start} - {end}
              </Text>
            </HStack>
          </Flex>
          <Text fontSize="sm">{jobDescription}</Text>
        </Box>
      </Flex>
    );
  }
}

export default ExperiencePreview;
