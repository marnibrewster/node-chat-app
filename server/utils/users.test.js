const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  //add seed data:
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }
  ]
});

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Marni',
      room: 'Harry Potter'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);

  });

  it('should remove a user', () => {
    //take id of seed user, pass to removeUser, assert user has been removed
    var removedUser = users.removeUser('1');
    expect(removedUser).toInclude({id: '1', name: 'Mike', room: 'Node Course'});
    expect(users).toNotInclude({id: '1', name: 'Mike', room: 'Node Course'});
  });

  it('should not remove a user', () => {
    //pass invalid user, assert hasn't been removed
    var userId = '4';
    var removedUser = users.removeUser(userId);
    expect(removedUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser('2');
    expect(user).toInclude({id: '2', name: 'Jen', room: 'React Course'})
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });
  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  })
});
