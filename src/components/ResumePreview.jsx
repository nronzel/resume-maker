import React, { Component } from "react";
import { Flex, Heading, Tag } from "@chakra-ui/react";
import ProfileSectionPreview from "./ProfileSectionPreview";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";
import Skills from "./Skills";
import SkillsPreview from "./SkillsPreview";
class ResumePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { profile, workExperience, education, skills } = this.props;
    return (
      <Flex
        direction="column"
        border="2px solid"
        borderColor="gray.700"
        p={8}
        borderRadius={5}
        w="595px"
        bgColor="white"
        color="black"
        alignItems="center"
        height="fit-content"
      >
        <ProfileSectionPreview profile={profile} />

        <Flex w="100%" pt={3} borderBottom="2px solid" borderColor="blue.700">
          <Heading size="md" fontWeight="medium">
            EXPERIENCE
          </Heading>
        </Flex>

        {workExperience.map((exp) => (
          <ExperiencePreview experience={exp} key={exp.id} id={exp.id} />
        ))}

        <Flex w="100%" pt={3} borderBottom="2px solid" borderColor="blue.700">
          <Heading size="md" fontWeight="medium">
            EDUCATION
          </Heading>
        </Flex>

        {education.map((school) => (
          <EducationPreview education={school} key={school.id} id={school.id} />
        ))}

        <Flex w="100%" pt={3} borderBottom="2px solid" borderColor="blue.700">
          <Heading size="md" fontWeight="medium">
            Skills
          </Heading>
        </Flex>

        <Flex gap={4} mt={3} wrap="wrap">
          {skills.map((skill) => (
            <SkillsPreview skill={skill.skill} key={skill.id} id={skill.id} />
          ))}
        </Flex>
      </Flex>
    );
  }
}

export default ResumePreview;
