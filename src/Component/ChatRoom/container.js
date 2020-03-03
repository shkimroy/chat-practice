import React from 'react'
import ChatRoom from "./presenter";
import socketio from "socket.io-client";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: props.match.params.id,
      title: "",
      messages: [],
      newMsg: "",
    };
    this.socket = null;
  }

  componentDidMount() {
    const { roomId } = this.state;
    const socket = socketio.connect("http://localhost:3001");
    this.socket = socket;
    socket.emit("joinRoom", parseInt(roomId, 10));

    socket.on("data", data => {
      this._setMessages(data);
    });
  }

  render() {
    return (
      <ChatRoom
        {...this.state}
        {...this.props}
        handleChangeInput={this._handleChangeInput}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _setMessages = data => {
    const { messages } = this.state;
    messages.push(data);
    this.setState({
      messages
    });
  };

  _handleChangeInput = newMsg => {
    this.setState({
      newMsg
    });
  };

  _handleSubmit = async() => {
    const { roomId, newMsg } = this.state;
    const { user } = this.props;
    if (!newMsg || newMsg.trim() === "") return;

    const data = {
      roomId,
      username: user.username,
      message: newMsg,
      at: new Date()
    }
    this.socket.emit("message", data);
    this._setMessages(data);
    this.setState({
      newMsg: ""
    })
  }
}

export default Container;