var socketio = require("socket.io");
var io = socketio();
var socketApi = {};

socketApi.io = io;

const LOBBY = "LOBBY";

var Room = require("../src/room");

io.on('connection', function(socket) {
  console.log("A user connected");

  socket.on('enterLobby', () => {
    socket.join(LOBBY, () => {
      socket.emit("rooms", Room.values());
    })
  })

  socket.on("createRoom", data => {
    socket.emit("rooms", [data]);
    socket.to(LOBBY).emit("rooms", [data]);
  });

  socket.on("joinRoom", roomId => {
    socket.join(roomId, () => {
      socket.emit("room", roomId);
    });
  });

  socket.on("message", function(data) {
    const { roomId } = data;
    socket.to(roomId).emit("data", data);
  });
})

module.exports = socketApi;