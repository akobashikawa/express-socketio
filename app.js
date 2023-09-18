require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const SocketsRouter = require('./api/modules/sockets/SocketsRouter');
const TareasRouter = require('./api/modules/tareas/TareasRouter');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/apidoc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api/sockets', SocketsRouter);
app.use('/api/tareas', TareasRouter);

module.exports = app;