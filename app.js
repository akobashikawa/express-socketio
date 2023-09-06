require('dotenv').config();

const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { configureSocket } = require('./api/modules/sockets/SocketsManager');

const port = process.env.PORT || '3000';
const app = express();
server = http.createServer(app);
const io = configureSocket(server);
app.set('io', io);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const socketsRouter = require('./api/modules/sockets/SocketsRouter');
const tareasRouter = require('./api/modules/tareas/TareasRouter');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/sockets', socketsRouter);
app.use('/api/tareas', tareasRouter);

server.listen(port);

server.on('listening', () => {
  console.log(`Express corriendo en puerto ${server.address().port}`);
});

server.on('error', (error) => {
  console.error(error);
  throw error;
});

module.exports = app;