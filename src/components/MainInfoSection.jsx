import { Input, Textarea, Flex, Box } from "@chakra-ui/react";
import React, { Component } from "react";

export class MainInfoSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box mt={3}>
        <Flex
          gap={3}
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
          direction="column"
          w="100%"
        >
          <Flex w="100%" gap={4}>
            <Input
              defaultValue=""
              borderBottom="1px solid"
              p="3px"
              variant="flushed"
              onChange={this.props.handleChange}
              name="firstName"
              focusBorderColor="purple.400"
              placeholder="first name"
            ></Input>
            <Input
              defaultValue=""
              borderBottom="1px solid"
              p="3px"
              variant="flushed"
              onChange={this.props.handleChange}
              name="lastName"
              focusBorderColor="purple.400"
              placeholder="last name"
            ></Input>
          </Flex>
          <Input
            defaultValue=""
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="email"
            onChange={this.props.handleChange}
            focusBorderColor="purple.400"
            placeholder="email@email.com"
          ></Input>
          <Input
            defaultValue=""
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="phone"
            onChange={this.props.handleChange}
            focusBorderColor="purple.400"
            placeholder="555-555-5555"
          ></Input>
          <Input
            defaultValue=""
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="link"
            onChange={this.props.handleChange}
            focusBorderColor="purple.400"
            placeholder="https://github.com/"
          ></Input>
          <Input
            defaultValue=""
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="title"
            onChange={this.props.handleChange}
            focusBorderColor="purple.400"
            placeholder="title"
          ></Input>
          <Textarea
            placeholder="summary"
            defaultValue=""
            name="description"
            size="sm"
            onChange={this.props.handleChange}
            h={150}
            focusBorderColor="purple.400"
          ></Textarea>
        </Flex>
      </Box>
    );
  }
}

export default MainInfoSection;
