[{
  id: 'jdka;233jfds;fjds',
  name: 'Marni',
  room: 'The Office Fans'
}]

class Users {
  constructor () {
    this.users = [];
  }
  // isUniqueUser(id, name, room) {
  //   var user = {id, name, room};
  //   var count = this.users.filter(function(user){ return user.name === name});
  //   return count > 1;
  // }
  addUser (id, name, room) {
    name = name.toLowerCase();
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser  (id) {
    var user = this.getUser(id);
    if(user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0]
  }
  getUserList (room) {
    //returns array of names
    var users = this.users.filter((user) => user.room.toLowerCase() === room.toLowerCase());
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
