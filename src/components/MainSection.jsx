import { Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

export class MainSection extends Component {
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
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      profile: {
        ...prevState.profile,
        [name]: value,
      },
    }));
  };

  render() {
    const { firstName, lastName, email, phone, link, title, description } =
      this.state.profile;
    return (
      <Flex justifyContent="center" gap={5}>
        <ResumeForm handleChange={this.handleInputChange} />
        <ResumePreview
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          link={link}
          title={title}
          description={description}
        />
      </Flex>
    );
  }
}

export default MainSection;
