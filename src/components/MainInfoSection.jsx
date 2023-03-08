import { FormControl, Heading, Input, Textarea, Flex } from "@chakra-ui/react";
import React, { Component } from "react";

export class MainInfoSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Heading
          color="gray.500"
          fontWeight="hairline"
          size="lg"
          textDecoration="underline"
          textDecorationThickness="1px"
        >
          Profile
        </Heading>
        <FormControl
          display="flex"
          gap={3}
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
          flexDir="column"
        >
          <Flex w="100%" gap={4}>
            <Input
              defaultValue="Art"
              borderBottom="1px solid"
              p="3px"
              variant="flushed"
              onChange={this.props.handleChange}
              name="firstName"
            ></Input>
            <Input
              defaultValue="Vandelay"
              borderBottom="1px solid"
              p="3px"
              variant="flushed"
              onChange={this.props.handleChange}
              name="lastName"
            ></Input>
          </Flex>
          <Input
            defaultValue="avandalay@vandelayindustries.com"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="email"
            onChange={this.props.handleChange}
          ></Input>
          <Input
            defaultValue="555-555-5555"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="phone"
            onChange={this.props.handleChange}
          ></Input>
          <Input
            defaultValue="https://vandelayindustries.com"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="link"
            onChange={this.props.handleChange}
          ></Input>
          <Input
            defaultValue="Import/Exporter"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="title"
            onChange={this.props.handleChange}
          ></Input>
          <Textarea
            placeholder="Objective statement"
            defaultValue="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime facilis ipsam corrupti sed quam unde architecto eum exercitationem debitis cum, temporibus vitae quia labore ad, obcaecati cupiditate a officiis eos nemo aliquid aliquam doloremque ea. Sit error nihil eum adipisci quam eos perspiciatis, ipsam, aliquam sapiente illum omnis dolore."
            name="description"
            size="sm"
            onChange={this.props.handleChange}
          ></Textarea>
        </FormControl>
      </>
    );
  }
}

export default MainInfoSection;
