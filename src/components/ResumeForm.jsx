import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { Component } from "react";
import MainInfoSection from "./MainInfoSection";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import ButtonStack from "./ButtonStack";
import ProgressBar from "./ProgressBar";

class ResumeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 20,
      activeIndex: 0,
    };
  }

  handleProgressBarChange = (index) => {
    const numTabs = 4;
    const percentPerTab = 100 / numTabs;
    let newProgress = this.state.progress;

    if (index > this.state.activeIndex) {
      // Calculate progress based on current and next active tabs
      newProgress = index * percentPerTab + percentPerTab;
    } else {
      // Calculate progress based on current and previous active tabs
      newProgress = index * percentPerTab + percentPerTab / 2;
    }

    // Set progress to 100% when navigating to last tab, or 25 when at first tab
    if (index === numTabs - 1) {
      newProgress = 100;
    } else if (index === 0) {
      newProgress = percentPerTab;
    }

    this.setState({
      activeIndex: index,
      progress: newProgress,
    });
  };

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
      handleAddEducation,
      handleRemoveEducation,
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
        <Tabs
          variant="enclosed"
          colorScheme="purple"
          onChange={this.handleProgressBarChange}
          w="450px"
          isFitted
        >
          <ProgressBar progress={progress} />
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Experience</Tab>
            <Tab>Education</Tab>
            <Tab>Skills</Tab>
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
                count={workExperienceCount}
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
              <ButtonStack
                count={educationCount}
                handleAdd={handleAddEducation}
                handleRemove={handleRemoveEducation}
              />
            </TabPanel>
            {/* Skills */}
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    );
  }
}

export default ResumeForm;
