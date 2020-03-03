import React from 'react'
import Lobby from "./presenter";
import socketio from "socket.io-client";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomname: "",
      roomList: []
    };
    this.socket = null;
  }
  
  componentDidMount() {
    const socket = socketio.connect("http://localhost:3001");
    this.socket = socket;
    socket.emit("enterLobby");
    socket.on("rooms", (data) => {
      this._setRooms(data);
    })
  }

  render() {
    return (
      <Lobby
        {...this.state}
        {...this.props}
        handleChangeInput={this._handleChangeInput}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _setRooms = rooms => {
    this.setState({
      roomList: rooms
    });
  }

  _handleChangeInput = (roomname) => {
    this.setState({
      roomname
    })
  }

  _handleSubmit = async () => {
    const { roomname } = this.state;
    if (!roomname || roomname.trim() === "") return;
    const { makeNewRoom, history } = this.props;
    const newRoom = await makeNewRoom(roomname);
    if (newRoom.data) {
      this.socket.emit("createRoom", newRoom.data)
      history.push(`/room/${newRoom.data.id}`)
    }      
  }
}

export default Container;