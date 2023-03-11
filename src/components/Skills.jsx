import { Flex, Input } from "@chakra-ui/react";
import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Flex>
        <Input
          defaultValue=""
          borderBottom="1px solid"
          p="3px"
          variant="flushed"
          colorScheme="purple"
          name="skill"
          focusBorderColor="purple.400"
          placeholder="skill"
          // onChange={(e) => handleChange(e, id)}
        ></Input>
      </Flex>
    );
  }
}

export default Skills;
