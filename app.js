const express = require('express');
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const tareasRouter = require('./api/modules/tareas/TareasRouter');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/apidoc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api/tareas', tareasRouter);

module.exports = app;