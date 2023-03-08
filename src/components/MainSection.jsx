import { Flex } from "@chakra-ui/react";
import React from "react";
import ResumeForm from "./ResumeForm";
// import ResumePreview from "./ResumePreview";

function MainSection() {
  return (
    <Flex justifyContent="space-around" flexGrow="1">
      <ResumeForm />
      {/* <ResumePreview /> */}
    </Flex>
  );
}

export default MainSection;
