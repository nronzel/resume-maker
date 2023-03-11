import { Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import ResumeForm from "./ResumeForm.jsx";
import ResumePreview from "./ResumePreview.jsx";
class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        firstName: "Art",
        lastName: "Vandelay",
        email: "avandalay@vandelayindustries.com",
        phone: "555-555-5555",
        link: "https://vandelayindustries.com",
        title: "Import/Exporter",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda maxime facilis ipsam corrupti sed quam unde architecto eum exercitationem debitis cum, temporibus vitae quia labore ad, obcaecati cupiditate a officiis eos nemo aliquid aliquam doloremque ea. Sit error nihil eum adipisci quam eos perspiciatis, ipsam, aliquam sapiente illum omnis dolore.",
      },
      workExperience: [
        {
          id: 0,
          companyName: "Vandelay Industries",
          start: "Jan 2000",
          end: "Present",
          jobTitle: "Import/Exporter",
          jobDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro dolorem quis. Corrupti, minima accusantium",
          isLast: true,
        },
      ],
      workExperienceCount: 1,
      education: [
        {
          id: 0,
          school: "New York University",
          degree: "Bachelors",
          start: "1996",
          end: "2000",
          fieldOfStudy: "Architecture",
          isLast: true,
        },
      ],
      educationCount: 1,
      skills: [
        { id: 0, skill: "importing" },
        { id: 1, skill: "exporting" },
        { id: 2, skill: "architecture" },
        { id: 3, skill: "test" },
        { id: 4, skill: "test2" },
      ],
    };
  }

  handleProfileInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      profile: {
        ...prevState.profile,
        [name]: value,
      },
    }));
  };

  handleWorkXpChange = (e, id) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const workExperience = [...prevState.workExperience];
      workExperience[id] = { ...workExperience[id], [name]: value };
      return { workExperience };
    });
  };

  handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const education = [...prevState.education];
      education[id] = { ...education[id], [name]: value };
      return { education };
    });
  };

  handleSkillsChange = (e, id) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const skills = [...prevState.skills];
      skills[id] = { ...skills[id], [name]: value };
      return { skills };
    });
  };

  handleAddWorkExperience = () => {
    const { workExperienceCount } = this.state;
    const newExperience = {
      id: workExperienceCount,
      companyName: "",
      start: "",
      end: "",
      jobTitle: "",
      jobDescription: "",
      isLast: true,
    };
    this.setState((prevState) => ({
      workExperience: [...prevState.workExperience, newExperience],
      workExperienceCount: prevState.workExperienceCount + 1,
    }));
  };

  handleAddEducation = () => {
    const { educationCount } = this.state;
    const newEducation = {
      id: educationCount,
      school: "",
      degree: "",
      start: "",
      end: "",
      fieldOfStudy: "",
      isLast: true,
    };
    this.setState((prevState) => ({
      education: [...prevState.education, newEducation],
      educationCount: prevState.educationCount + 1,
    }));
  };

  handleAddSkill = () => {
    const newSkill = {
      id: this.state.skills.length,
      skill: "",
    };
    this.setState((prevState) => ({
      skills: [...prevState.skills, newSkill],
    }));
  };

  handleRemoveEducation = () => {
    const education = [...this.state.education];
    education.pop();
    this.setState((prevState) => ({
      educationCount: prevState.educationCount - 1,
      education,
    }));
  };

  handleRemoveWorkExperience = () => {
    const workExperience = [...this.state.workExperience];
    workExperience.pop();
    this.setState((prevState) => ({
      workExperienceCount: prevState.workExperienceCount - 1,
      workExperience,
    }));
  };

  handleRemoveSkill = (id) => {
    const newSkills = this.state.skills.filter((skill) => skill.id !== id);
    this.setState({ skills: newSkills });
  };

  render() {
    return (
      <Flex
        direction={{ base: "column", md: "column", lg: "column", xl: "row" }}
        justifyContent="center"
        gap={5}
      >
        <ResumeForm
          handleChange={this.handleProfileInputChange}
          handleWorkXpChange={this.handleWorkXpChange}
          handleAddWorkXp={this.handleAddWorkExperience}
          handleRemoveWorkXp={this.handleRemoveWorkExperience}
          experience={this.state.workExperience}
          workExperienceCount={this.state.workExperienceCount}
          education={this.state.education}
          handleEducationChange={this.handleEducationChange}
          educationCount={this.state.educationCount}
          handleAddEducation={this.handleAddEducation}
          handleRemoveEducation={this.handleRemoveEducation}
          skills={this.state.skills}
          handleSkillsChange={this.handleSkillsChange}
          handleRemoveSkill={this.handleRemoveSkill}
          handleAddSkill={this.handleAddSkill}
        />
        <ResumePreview
          profile={this.state.profile}
          workExperience={this.state.workExperience}
          education={this.state.education}
          skills={this.state.skills}
        />
      </Flex>
    );
  }
}

export default MainSection;
