import React, { Component } from "react";
import ProfileSectionPreview from "./ProfileSectionPreview";
import { Flex, Heading } from "@chakra-ui/react";
import ExperiencePreview from "./ExperiencePreview";
export class ResumePreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
        <ProfileSectionPreview profile={this.props.profile} />
        <Flex w="100%" pt={3} borderBottom="2px solid" borderColor="blue.700">
          <Heading size="md" fontWeight="medium">
            EXPERIENCE
          </Heading>
        </Flex>
        <ExperiencePreview experience={this.props.workExperience} />
      </Flex>
    );
  }
}

export default ResumePreview;
