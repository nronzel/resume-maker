import { Flex } from "@chakra-ui/react";
import React, { Component } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

export class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Art Vandelay",
      email: "avandalay@vandelayindustries.com",
      phone: "555-555-5555",
      link: "https://vandelayindustries.com",
      title: "Import/Exporter",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ipsa!",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, phone, link, title, description } = this.state;
    return (
      <Flex justifyContent="center" gap={5}>
        <ResumeForm handleChange={this.handleInputChange} />
        <ResumePreview
          name={name}
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
