import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Button,
  HStack,
  Divider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
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
        <Tabs variant="enclosed" colorScheme="purple" isLazy>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Experience</Tab>
            <Tab>Education</Tab>
            <Tab>Skills</Tab>
            <Tab>Projects</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MainInfoSection handleChange={handleChange} />
            </TabPanel>
            <TabPanel>
              {experience.map((experience) => (
                <WorkExperience
                  key={experience.id}
                  id={experience.id}
                  handleChange={handleWorkXpChange}
                />
              ))}

              <HStack mt={-6} display="flex" justifyContent="center">
                <Button
                  colorScheme="purple"
                  size="md"
                  onClick={handleAddWorkXp}
                >
                  <AddIcon />
                </Button>
                {workExperienceCount > 1 && (
                  <Button
                    colorScheme="purple"
                    size="md"
                    variant="outline"
                    onClick={handleRemoveWorkXp}
                  >
                    <DeleteIcon />
                  </Button>
                )}
              </HStack>
            </TabPanel>
            <TabPanel>{/* <Education /> */}</TabPanel>
            <TabPanel>{/* <Skills />} */}</TabPanel>
            <TabPanel>{/* <Projects /> */}</TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    );
  }
}

export default ResumeForm;
