import React, { Component } from "react";

//import ExampleComponent from 'colored-heading1'
import { ColoredHeadingOne, ColoredHeadingTwo } from "colored-heading1";

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne
          text="Colored Heading One is working"
          color={"red"}
        />

        <ColoredHeadingTwo
          text="Colored Heading Two is working"
          color={"blue"}
        />
      </div>
    );
  }
}
