import { Tag, Flex, Input, Textarea, Box } from "@chakra-ui/react";
import React from "react";

function WorkExperience({ handleChange, id }) {
  return (
    <Box mb={10} mt={4} w="100%">
      <Flex w="100%" gap={4} direction="column">
        <Tag size="md" variant="subtle" colorScheme="purple" mb={-4} w={45}>
          {`# ${id + 1}`}
        </Tag>
        <Input
          defaultValue=""
          borderBottom="1px solid"
          p="3px"
          variant="flushed"
          onChange={(e) => handleChange(e, id)}
          name="companyName"
          focusBorderColor="purple.400"
          placeholder="company name"
        ></Input>

        <Flex gap={3}>
          <Input
            defaultValue=""
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            onChange={(e) => handleChange(e, id)}
            name="start"
            focusBorderColor="purple.400"
            placeholder="start date"
          ></Input>
          <Input
            defaultValue=""
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            onChange={(e) => handleChange(e, id)}
            name="end"
            focusBorderColor="purple.400"
            placeholder="end date"
          ></Input>
        </Flex>
        <Input
          defaultValue=""
          borderBottom="1px solid"
          p="3px"
          variant="flushed"
          onChange={(e) => handleChange(e, id)}
          name="jobTitle"
          focusBorderColor="purple.400"
          placeholder="job title"
        ></Input>
        <Textarea
          defaultValue=""
          size="sm"
          onChange={(e) => handleChange(e, id)}
          name="jobDescription"
          focusBorderColor="purple.400"
          placeholder="job description / duties"
        ></Textarea>
      </Flex>
    </Box>
  );
}

export default WorkExperience;
