import React, { Component } from "react";
import ProfileSectionPreview from "./ProfileSectionPreview";
import { Flex, Heading } from "@chakra-ui/react";
import ExperiencePreview from "./ExperiencePreview";
class ResumePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { profile, workExperience } = this.props;
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
      </Flex>
    );
  }
}

export default ResumePreview;
