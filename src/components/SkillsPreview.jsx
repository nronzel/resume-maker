import { Tag } from "@chakra-ui/react";
import React, { Component } from "react";

class SkillsPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { skill, id } = this.props;
    return (
      <Tag
        colorScheme="blue"
        key={id}
        variant="solid"
        fontWeight="semibold"
        fontSize="md"
        size="md"
        p={2}
      >
        {skill}
      </Tag>
    );
  }
}

export default SkillsPreview;
