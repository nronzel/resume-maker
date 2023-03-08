import { FormControl, Heading, Input, Textarea } from "@chakra-ui/react";
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
          <Input
            defaultValue="Art Vandelay"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            onChange={this.props.handleChange}
            name="name"
          ></Input>
          <Input
            defaultValue="avandalay@vandelayindustries.com"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="email"
          ></Input>
          <Input
            defaultValue="555-555-5555"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="phone"
          ></Input>
          <Input
            defaultValue="https://vandelayindustries.com"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="link"
          ></Input>
          <Input
            defaultValue="Import/Exporter"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            name="title"
          ></Input>
          <Textarea
            placeholder="Objective statement"
            defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsa!"
            name="description"
          ></Textarea>
        </FormControl>
      </>
    );
  }
}

export default MainInfoSection;
