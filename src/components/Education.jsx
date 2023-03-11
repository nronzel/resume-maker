import React, { Component } from "react";
import { Box, Input } from "@chakra-ui/react";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box>
        <Input
          defaultValue=""
          borderBottom="1px solid"
          p="3px"
          variant="flushed"
          colorScheme="purple"
          name="school"
          focusBorderColor="purple.400"
          placeholder="institution name"
        ></Input>
      </Box>
    );
  }
}

export default Education;
