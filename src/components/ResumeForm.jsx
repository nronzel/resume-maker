import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Flex, Heading, Button, HStack, Divider, Tag } from "@chakra-ui/react";
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
      handleRemoveWorkXp,
      workExperienceCount,
      experience,
    } = this.props;

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

        {experience.map((experience) => (
          <WorkExperience
            key={experience.id}
            id={experience.id}
            handleChange={handleWorkXpChange}
          />
        ))}

        <HStack>
          <Button colorScheme="purple" size="sm" onClick={handleAddWorkXp}>
            <AddIcon />
          </Button>
          {workExperienceCount > 1 && (
            <Button
              colorScheme="purple"
              size="sm"
              variant="outline"
              onClick={handleRemoveWorkXp}
            >
              <DeleteIcon />
            </Button>
          )}
        </HStack>
        {/* <Education /> */}
        {/* <Projects /> */}
      </Flex>
    );
  }
}

export default ResumeForm;
