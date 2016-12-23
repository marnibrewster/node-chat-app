const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) =>{
  console.log('new client connected');
    socket.emit('newMessage', {
      from: "mjb",
      text: "message from server",
      createdAt: 233232
    });
    socket.on('createMessage', (message) => {
      console.log('create message', message);
    })
  // socket.on('disconnect', (socket) => {
  //   console.log('user disconnected from server')
  // });
  // socket.on('createEmail', (newEmail) => {
  //   console.log('create email', newEmail);
  // });
  // socket.emit('newEmail', {
  //   from: 'marni@example.com',
  //   text: 'hi how are you?',
  //   createdAt: 2332
  // });
});

server.listen(port, () => {
  console.log('server is up on ${port}')
});
