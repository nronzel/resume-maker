import { AddIcon } from "@chakra-ui/icons";
import { Flex, Heading, Button } from "@chakra-ui/react";
import React, { Component } from "react";
import MainInfoSection from "./MainInfoSection";
import WorkExperience from "./WorkExperience";

class ResumeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleChange,
      handleWorkXpChange,
      handleAddWorkXp,
      workExperienceCount,
    } = this.props;
    const workExperiences = [];
    for (let i = 0; i < workExperienceCount; i++) {
      workExperiences.push(
        <WorkExperience
          key={i}
          id={i}
          handleChange={(e) => handleWorkXpChange(e, i)}
        />
      );
    }
    return (
      <Flex
        direction="column"
        border="1px solid"
        borderColor="gray.700"
        p={5}
        borderRadius={5}
        w="595px"
        alignItems="center"
        gap={4}
      >
        <MainInfoSection handleChange={handleChange} />
        <Heading
          color="gray.500"
          fontWeight="hairline"
          size="lg"
          textDecoration="underline"
          textDecorationThickness="1px"
          textAlign="center"
          mb={3}
        >
          Work Experience
        </Heading>

        {/* <WorkExperience handleChange={handleWorkXpChange} /> */}
        {workExperiences}

        <Button colorScheme="purple" size="sm" onClick={handleAddWorkXp}>
          <AddIcon />
        </Button>

        {/* <Education /> */}
        {/* <Projects /> */}
      </Flex>
    );
  }
}

export default ResumeForm;
