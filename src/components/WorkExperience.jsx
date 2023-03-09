import React, { Component } from "react";
import { Flex, Input, Textarea, Box } from "@chakra-ui/react";

export class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, id } = this.props;
    return (
      <Box mb={4}>
        <Flex w="100%" gap={4} direction="column">
          <Flex gap={3}>
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
            placeholder="job description"
          ></Textarea>
        </Flex>
      </Box>
    );
  }
}

export default WorkExperience;
