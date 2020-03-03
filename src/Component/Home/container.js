import React from 'react';
import Home from "./presenter";

class Container extends React.Component {
  state = {
    username: ""
  }

  render() {
    return (
      <Home
        {...this.props}
        {...this.state}
        handleInput={this._handleInput}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _handleInput = (username) => {
    this.setState({
      username
    })
  }

  _handleSubmit = () => {
    const { username } = this.state;
    if (!username || username.trim() === "") return;

    const { userLogin } = this.props;
    userLogin(username);
  }
}



export default Container;