var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
});
socket.on('newMessage', function(message) {
  console.log('new message', message);
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

socket.emit('createMessage', {
  from: 'Frank',
  text: 'Hi'
}, function (data) {
  console.log('got it', data);
});
