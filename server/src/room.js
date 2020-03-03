function Room() {
  this._rooms = [];
}

Room.prototype = {
  create: function(value) {
    var data = {
      id: this._rooms.length + 1,
      title: value
    };
    this._rooms.push(data);
    return data;
  },
  get: function(id) {
    // return this._rooms[key]
    var room = this._rooms.find(room => room.id === id);
    return room;
  },
  values: function() {
    return this._rooms;
    // var arVal = new Array();
    // for (var prop in this._rooms) {
    //   arVal.push(this._rooms[prop])
    // }
    // return arVal;
  }
};

module.exports = new Room();
