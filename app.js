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

const socketsRouter = require('./api/modules/sockets/SocketsRouter');
const tareasRouter = require('./api/modules/tareas/TareasRouter');
const nodosRouter = require('./api/modules/nodos/NodosRouter');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/apidoc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api/sockets', socketsRouter);
app.use('/api/tareas', tareasRouter);
app.use('/api/nodos', nodosRouter);

module.exports = app;