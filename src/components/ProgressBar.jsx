import React from "react";
import { Progress } from "@chakra-ui/react";

function ProgressBar({ progress }) {
  return (
    <Progress
      value={progress}
      size="sm"
      colorScheme="purple"
      mb={4}
      borderRadius={3}
    />
  );
}

export default ProgressBar;
