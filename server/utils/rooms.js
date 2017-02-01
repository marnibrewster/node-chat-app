class Rooms {
  constructor() {
    this.rooms = [];
  }
  findRooms(rooms) {
    var availableRooms = [];
    if (rooms) {
        for (var room in rooms) {
            //if (!rooms[room].hasOwnProperty(room)) {
                availableRooms.push(room);
            //}
        }
    }
    for(var i = 0; i < availableRooms.length; i++){
      var searchPattern = new RegExp('^/', 'i');
      //if (!searchPattern.test(availableRooms[i])) {
        console.log(i, availableRooms[i]);
        //return availableRooms[i];
      //}
    }
  }
}



module.exports = {Rooms};
