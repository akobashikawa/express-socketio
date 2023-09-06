const { Server } = require("socket.io");

const connectedUsers = {};

function configureSocket(server) {
  const frontendsUrlsString = process.env.FRONTENDS_URL || '';
  const frontendsUrls = frontendsUrlsString.split(' ');
  const io = new Server(server, {
    cors: {
      origin: frontendsUrls
    }
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    connectedUsers[socket.id] = socket.id;
    console.log(connectedUsers);
    // socket.broadcast.emit('hi');
    io.emit('hi');

    socket.on('userConnected', (username) => {
      connectedUsers[socket.id] = username;
      io.emit('updatedUserList', Object.values(connectedUsers));
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
      if (connectedUsers[socket.id]) {
        delete connectedUsers[socket.id];
        io.emit('updatedUserList', Object.values(connectedUsers));
      }
    });

    socket.on('create-something', (value) => {
      console.log('create-something: ' + value);
      const msg = new Date() + ': ' + value.toUpperCase();
      io.emit('create-something', msg)
    });
  });

  return io;
}

function getConnectedUsers() {
  return connectedUsers;
}

module.exports = { configureSocket, getConnectedUsers };