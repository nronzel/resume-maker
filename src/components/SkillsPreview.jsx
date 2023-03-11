import { Tag } from "@chakra-ui/react";
import React, { Component } from "react";

class SkillsPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { skill, id } = this.props;
    return (
      <Tag colorScheme="blue" key={id}>
        {skill}
      </Tag>
    );
  }
}

export default SkillsPreview;
