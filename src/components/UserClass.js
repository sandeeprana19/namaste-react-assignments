import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "Default",
      },
    };

    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount");

    const data = await fetch("https://api.github.com/users/sandeeprana19");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child componentWillUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <div>
          <img src={avatar_url} alt="Avatar" />
        </div>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
