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

    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");

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
    // console.log(this.props.name + "Child componentWillUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;

    return (
      <div className="w-64 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.1)] bg-white relative mt-20 p-8 h-72 pt-32 text-center">
        <div className="w-40 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden absolute start-1/2 -translate-x-1/2 -top-14">
          <img src={avatar_url} alt="Avatar" className="w-full h-auto" />
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <h1>Count: {count}</h1>
          <button
            className="h-8 bg-orange-600 hover:bg-orange-800 transition-all text-white rounded-md border-none flex items-center justify-center px-3 text-sm font-semibold outline-none"
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            Increase Count
          </button>
          <h1>Name: {name}</h1>
          <h2>Location: {location}</h2>
        </div>
      </div>
    );
  }
}

export default UserClass;
