import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent render");

    return (
      <div className="pt-[8.625rem] mb-7">
        <div className="2xl:w-[90rem] w-[73.125rem] mx-auto">
          <h1>About us page</h1>
          <p>This is namaste react web series</p>
          <UserClass name="First" />
          {/* <UserClass name="Second" /> */}
        </div>
      </div>
    );
  }
}

export default About;
