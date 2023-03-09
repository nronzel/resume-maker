import React, { Component } from "react";
import { Box, Flex, Heading, VStack, Text, Spacer } from "@chakra-ui/react";

export class ProfileSectionPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { firstName, lastName, email, phone, link, title, description } =
      this.props.profile;
    return (
      <Box p="0" m="0" w="100%">
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
              {firstName}
            </Heading>
            <Heading size="2xl" color="blue.700">
              {lastName}
            </Heading>
            <Text fontSize="xl" as="i" fontWeight="thin">
              {title}
            </Text>
          </Box>
          <Spacer />
          <VStack w="50%">
            <Text
              w="100%"
              textAlign={"right"}
              color="gray.600"
              fontWeight="thin"
            >
              {email}
            </Text>
            <Text
              w="100%"
              textAlign={"right"}
              color="gray.600"
              fontWeight="thin"
            >
              {phone}
            </Text>
            <Text
              w="100%"
              textAlign={"right"}
              color="gray.600"
              fontWeight="thin"
            >
              {link}
            </Text>
          </VStack>
        </Flex>
        <Text fontSize="sm" pt={3}>
          {description}
        </Text>
      </Box>
    );
  }
}

export default ProfileSectionPreview;
