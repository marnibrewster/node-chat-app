

var isRealString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

var isUnique = (name, room)=> {
  name = name.toLowerCase();
  this.users = this.users.filter((user) => user.name === name && user.room === room);
  //want it to return true if

  return this.users.length === 0;
}
module.exports = {isRealString, isUnique};
