var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
  // socket.emit('createEmail', {
  //   to: "jen@example.com",
  //   text: "hey it's jen"
  // });
  socket.emit('createMessage', {
    from: "client",
    text: "message from client"
  });
});
socket.on('newMessage', function(message) {
  console.log('new message', message);
});

// socket.on('disconnect', function () {
//   console.log('disconnected from server');
// });
//
// socket.on('newEmail', function(email) {
//   console.log('new email!', email);
// });
