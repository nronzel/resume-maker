import React, { Component } from "react";
import ProfileSectionPreview from "./ProfileSectionPreview";
import { Flex } from "@chakra-ui/react";
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
      >
        <ProfileSectionPreview
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          email={this.props.email}
          phone={this.props.phone}
          link={this.props.link}
          title={this.props.title}
          description={this.props.description}
        />
      </Flex>
    );
  }
}

export default ResumePreview;
