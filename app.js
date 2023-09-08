const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const tareasRouter = require('./api/modules/tareas/TareasRouter');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/tareas', tareasRouter);

module.exports = app;