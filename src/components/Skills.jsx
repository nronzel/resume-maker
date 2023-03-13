import { CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import React from "react";

function Skills({ handleChange, removeSkill, id }) {
  return (
    <Flex justifyContent="center">
      <InputGroup w="50%">
        <Input
          defaultValue=""
          borderBottom="1px solid"
          p="3px"
          variant="flushed"
          colorScheme="purple"
          name="skill"
          focusBorderColor="purple.400"
          placeholder="skill"
          onChange={(e) => handleChange(e, id)}
        ></Input>
        <InputRightElement>
          <IconButton
            icon={<CloseIcon />}
            size="xs"
            colorScheme="purple"
            variant="outline"
            onClick={() => removeSkill(id)}
          ></IconButton>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

export default Skills;
