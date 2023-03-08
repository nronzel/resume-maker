import React, { Component } from "react";
import { Box, Flex, Heading, VStack, Text, Spacer } from "@chakra-ui/react";

export class ProfileSectionPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Flex
        justifyContent="space-between"
        w="100%"
        alignItems="center"
        pb={2}
        borderBottom="4px solid"
        borderColor="blue.700"
      >
        <Box>
          <Heading size="xl" fontWeight="400">
            {this.props.name.split(" ")[0]}
          </Heading>
          <Heading size="2xl" color="blue.700">
            {this.props.name.split(" ")[1]}
          </Heading>
          <Text fontSize="xl" as="i" fontWeight="thin">
            {this.props.title}
          </Text>
        </Box>
        <Spacer />
        <VStack w="50%">
          <Text w="100%" textAlign={"right"} color="gray.600" fontWeight="thin">
            {this.props.email}
          </Text>
          <Text w="100%" textAlign={"right"} color="gray.600" fontWeight="thin">
            {this.props.phone}
          </Text>
          <Text w="100%" textAlign={"right"} color="gray.600" fontWeight="thin">
            {this.props.link}
          </Text>
        </VStack>
      </Flex>
    );
  }
}

export default ProfileSectionPreview;
