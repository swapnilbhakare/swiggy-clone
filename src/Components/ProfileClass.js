import React, { Component } from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy Name",
        location: "dummy Location",
      },
    };
    console.log(" child - Constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/swapnilbhakare");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("child - Component did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count !== prevState.count
    )
      console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("child - render");

    return (
      <div>
        <h1>Profile Class Component</h1>
        <img style={{ width: "200px" }} src={this.state.userInfo.avatar_url} />
        <h4>Name- {this.state.userInfo.name}</h4>
        <h4>Location- {this.state.userInfo.location}</h4>
        <h4>Bio- {this.state.userInfo.bio}</h4>
        <h4>Twitter UserName- {this.state.userInfo.twitter_username}</h4>
      </div>
    );
  }
}

export default ProfileClass;
