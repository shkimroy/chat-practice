var express = require("express");
var router = express.Router();
var Room = require("../src/room");

router.post("/room/", function(req, res) {
  const { title } = req.body;
  var newRoom = Room.create(title);
  res.status(200).json({
    "data": newRoom
  })
})

module.exports = router;