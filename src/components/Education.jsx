import { Input, Flex } from "@chakra-ui/react";
import React from "react";

function Education({ id, handleChange }) {
  return (
    <Flex direction="column" gap={4} mb={10}>
      <Input
        defaultValue=""
        borderBottom="1px solid"
        p="3px"
        variant="flushed"
        colorScheme="purple"
        name="school"
        focusBorderColor="purple.400"
        placeholder="institution name"
        onChange={(e) => handleChange(e, id)}
      ></Input>
      <Flex gap={5}>
        <Input
          defaultValue=""
          borderBottom="1px solid"
          p="3px"
          variant="flushed"
          colorScheme="purple"
          name="start"
          focusBorderColor="purple.400"
          placeholder="start"
          onChange={(e) => handleChange(e, id)}
        ></Input>
        <Input
          defaultValue=""
          borderBottom="1px solid"
          p="3px"
          variant="flushed"
          colorScheme="purple"
          name="end"
          focusBorderColor="purple.400"
          placeholder="end"
          onChange={(e) => handleChange(e, id)}
        ></Input>
      </Flex>
      <Input
        defaultValue=""
        borderBottom="1px solid"
        p="3px"
        variant="flushed"
        colorScheme="purple"
        name="fieldOfStudy"
        focusBorderColor="purple.400"
        placeholder="field of study"
        onChange={(e) => handleChange(e, id)}
      ></Input>
      <Input
        defaultValue=""
        borderBottom="1px solid"
        p="3px"
        variant="flushed"
        colorScheme="purple"
        name="degree"
        focusBorderColor="purple.400"
        placeholder="degree"
        onChange={(e) => handleChange(e, id)}
      ></Input>
    </Flex>
  );
}

export default Education;
