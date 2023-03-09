import { Flex, Heading } from "@chakra-ui/react";
import React, { Component } from "react";
import MainInfoSection from "./MainInfoSection";
import WorkExperience from "./WorkExperience";

class ResumeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numWorkExperiences: 1,
      workExperienceData: [
        {
          companyName: "",
          start: "",
          end: "",
          jobTitle: "",
          jobDescription: "",
        },
      ],
    };
  }

  handleWorkExperienceChange = (index, name, value) => {
    this.setState((prevState) => {
      const workExperienceData = [...prevState.workExperienceData];
      workExperienceData[index][name] = value;
      return { workExperienceData };
    });
  };

  addWorkExperience = () => {
    this.setState((prevState) => ({
      numWorkExperiences: prevState.numWorkExperiences + 1,
      workExperienceData: [
        ...prevState.workExperienceData,
        {
          companyName: "",
          start: "",
          end: "",
          jobTitle: "",
          jobDescription: "",
        },
      ],
    }));
  };

  removeWorkExperience = () => {
    this.setState((prevState) => ({
      numWorkExperiences: prevState.numWorkExperiences - 1,
      workExperienceData: prevState.workExperienceData.slice(0, -1),
    }));
  };

  render() {
    const { numWorkExperiences, workExperienceData } = this.state;
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
        <MainInfoSection handleChange={this.props.handleChange} />
        <Heading
          color="gray.500"
          fontWeight="hairline"
          size="lg"
          textDecoration="underline"
          textDecorationThickness="1px"
          textAlign="center"
          mb={3}
        >
          Work Experience
        </Heading>
        {workExperienceData.map((experience, index) => (
          <WorkExperience
            key={index}
            numWorkExperiences={numWorkExperiences}
            handleChange={(name, value) =>
              this.handleWorkExperienceChange(index, name, value)
            }
            addExperience={this.addWorkExperience}
            removeExperience={this.removeWorkExperience}
            isLast={index === numWorkExperiences - 1}
            showDeleteButton={
              numWorkExperiences > 1 && index === numWorkExperiences - 1
            }
            companyName={experience.companyName}
            start={experience.start}
            end={experience.end}
            jobTitle={experience.jobTitle}
            jobDescription={experience.jobDescription}
          />
        ))}
        {/* <Education /> */}
        {/* <Projects /> */}
      </Flex>
    );
  }
}

export default ResumeForm;
