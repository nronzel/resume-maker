import { Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";
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

  handleRemoveWorkExperience = () => {
    const workExperience = [...this.state.workExperience];
    workExperience.pop();
    this.setState((prevState) => ({
      workExperienceCount: prevState.workExperienceCount - 1,
      workExperience,
    }));
  };

  render() {
    return (
      <Flex justifyContent="center" gap={5}>
        <ResumeForm
          handleChange={this.handleProfileInputChange}
          handleWorkXpChange={this.handleWorkXpChange}
          handleAddWorkXp={this.handleAddWorkExperience}
          handleRemoveWorkXp={this.handleRemoveWorkExperience}
          experience={this.state.workExperience}
          workExperienceCount={this.state.workExperienceCount}
        />
        <ResumePreview
          profile={this.state.profile}
          workExperience={this.state.workExperience}
        />
      </Flex>
    );
  }
}

export default MainSection;
