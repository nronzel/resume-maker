import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Progress,
  Text,
} from "@chakra-ui/react";
import React, { Component } from "react";
import MainInfoSection from "./MainInfoSection";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import ButtonStack from "./ButtonStack";

class ResumeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 20,
    };
  }

  render() {
    const {
      handleChange,
      handleWorkXpChange,
      handleAddWorkXp,
      handleRemoveWorkXp,
      handleEducationChange,
      workExperienceCount,
      experience,
      education,
      educationCount,
    } = this.props;

    const { progress } = this.state;

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
        h="fit-content"
      >
        <Tabs variant="enclosed" colorScheme="purple" isLazy>
          <Progress
            value={progress}
            size="sm"
            colorScheme="purple"
            mb={4}
            borderRadius={3}
          />
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Experience</Tab>
            <Tab>Education</Tab>
            <Tab>Skills</Tab>
            <Tab>Projects</Tab>
          </TabList>
          <TabPanels>
            {/* Main Profile Info */}
            <TabPanel>
              <MainInfoSection handleChange={handleChange} />
            </TabPanel>
            {/* Work Experience */}
            <TabPanel>
              {experience.map((experience) => (
                <WorkExperience
                  key={experience.id}
                  id={experience.id}
                  handleChange={handleWorkXpChange}
                />
              ))}
              <ButtonStack
                handleAdd={handleAddWorkXp}
                handleRemove={handleRemoveWorkXp}
                workExperienceCount={workExperienceCount}
              />
            </TabPanel>
            {/* Education */}
            <TabPanel>
              {education.map((school) => (
                <Education
                  key={school.id}
                  id={school.id}
                  handleChange={handleEducationChange}
                />
              ))}
              <ButtonStack educationCount={educationCount} />
            </TabPanel>
            {/* Skills */}
            <TabPanel></TabPanel>
            {/* Projects */}
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    );
  }
}

export default ResumeForm;
