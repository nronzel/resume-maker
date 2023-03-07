import React, { Component } from "react";
import { Card, CardHeader, Heading } from "@chakra-ui/react";

export default class App extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <Heading>Test!</Heading>
        </CardHeader>
      </Card>
    );
  }
}
