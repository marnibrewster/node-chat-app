const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) =>{
  console.log('new user connected');
    // socket.emit('newMessage', {
    //   from: "mjb",
    //   text: "message from server",
    //   createdAt: 233232
    // });
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));
    socket.on('createMessage', (message, callback) => {
      console.log('create message', message);
      io.emit('newMessage', generateMessage(message.from, message.text));
      callback('this is a callback string');
      // socket.broadcast.emit('newMessage', {
      //     from: message.from,
      //     text: message.text,
      //     createdAt: new Date().getTime()
      // });
    });
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
