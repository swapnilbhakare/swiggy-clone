import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Parent - Constructor");
  }
  componentDidMount() {
    // Best place to make an api call to
    console.log("parent -Componet did mount");
  }
  render() {
    console.log("Parent - Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <ProfileClass name="swapnil" />
      </div>
    );
  }
}

export default About;
