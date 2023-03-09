import React, { Component } from "react";
import {
  HStack,
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

export class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeleteButton: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  };

  handleAddExperience = () => {
    this.props.addExperience();
  };

  handleRemoveExperience = () => {
    this.props.removeExperience();
  };

  componentDidMount() {
    const isLast = this.props.isLast;
    const shouldShowRemoveButton = isLast && this.props.numWorkExperiences >= 2;
    this.setState({
      showDeleteButton: shouldShowRemoveButton,
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.isLast !== this.props.isLast ||
      prevProps.numWorkExperiences !== this.props.numWorkExperiences
    ) {
      const isLast = this.props.isLast;
      const shouldShowRemoveButton =
        isLast && this.props.numWorkExperiences >= 2;
      this.setState({
        showDeleteButton: shouldShowRemoveButton,
      });
    }
  }

  render() {
    const isLast = this.props.isLast;

    return (
      <>
        <Flex w="100%" gap={4} direction="column">
          <Flex gap={3}>
            <Input
              defaultValue="Vandelay Industries"
              borderBottom="1px solid"
              p="3px"
              variant="flushed"
              onChange={this.handleInputChange}
              name="companyName"
              focusBorderColor="purple.400"
              placeholder="company name"
            ></Input>
            <Input
              defaultValue="Jan. 2000"
              borderBottom="1px solid"
              p="3px"
              variant="flushed"
              onChange={this.handleInputChange}
              name="start"
              focusBorderColor="purple.400"
              placeholder="start date"
            ></Input>
            <Input
              defaultValue="Present"
              borderBottom="1px solid"
              p="3px"
              variant="flushed"
              onChange={this.handleInputChange}
              name="end"
              focusBorderColor="purple.400"
              placeholder="end date"
            ></Input>
          </Flex>
          <Input
            defaultValue="Import/Exporter"
            borderBottom="1px solid"
            p="3px"
            variant="flushed"
            onChange={this.handleInputChange}
            name="jobTitle"
            focusBorderColor="purple.400"
            placeholder="job title"
          ></Input>
          <Textarea
            defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda illo alias mollitia necessitatibus enim!"
            size="sm"
            onChange={this.handleInputChange}
            name="jobDescription"
            focusBorderColor="purple.400"
            placeholder="job description"
          ></Textarea>
        </Flex>
        <HStack>
          {isLast && (
            <Button
              colorScheme="purple"
              size="sm"
              onClick={this.props.addExperience}
            >
              <AddIcon />
            </Button>
          )}
          {this.state.showDeleteButton && (
            <Button
              colorScheme="purple"
              size="sm"
              variant="ghost"
              onClick={this.props.removeExperience}
            >
              <DeleteIcon />
            </Button>
          )}
        </HStack>
      </>
    );
  }
}

export default WorkExperience;
