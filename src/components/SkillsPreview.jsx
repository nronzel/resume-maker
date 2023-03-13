import { Tag } from "@chakra-ui/react";
import React from "react";

function SkillsPreview({ skill, id }) {
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

export default SkillsPreview;
