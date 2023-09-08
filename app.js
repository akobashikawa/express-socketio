require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const socketsRouter = require('./api/modules/sockets/SocketsRouter');
const tareasRouter = require('./api/modules/tareas/TareasRouter');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/sockets', socketsRouter);
app.use('/api/tareas', tareasRouter);

module.exports = app;