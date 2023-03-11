import React, { Component } from "react";
import { Flex, Spacer, Text, HStack } from "@chakra-ui/react";

class EducationPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, school, degree, start, end, fieldOfStudy } =
      this.props.education;
    return (
      <Flex w="100%" key={id} id={id} direction="column" mb={3}>
        <Flex w="100%" mt={2}>
          <Flex direction="column">
            <Text fontSize="lg" fontWeight="semibold" color="blue.700">
              {fieldOfStudy}
            </Text>
            <Text>{school}</Text>
          </Flex>
          <Spacer />
          <HStack>
            <Text color="gray.500">{degree}</Text>
            <Text fontWeight="thin">|</Text>
            <Text as="i" fontWeight="thin">{`${start} - ${end}`}</Text>
          </HStack>
        </Flex>
      </Flex>
    );
  }
}

export default EducationPreview;
