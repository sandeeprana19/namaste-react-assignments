import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
      <UserContext.Consumer>
        {({ loggedInUser }) => {
          return (
            <div className="pt-[8.625rem] mb-7">
              <div className="2xl:w-[90rem] w-[73.125rem] mx-auto">
                <h1>About us page</h1>
                <p>This is namaste react web series</p>
                <h2>Logged in user: {loggedInUser}</h2>
                <UserClass name="First" />
                {/* <UserClass name="Second" /> */}
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default About;
