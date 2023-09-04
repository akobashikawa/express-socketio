const express = require('express');
const path = require('path');

const app = express();

const tareasRouter = require('./api/modules/tareas/tareasRouter');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/tareas', tareasRouter);

app.listen(3000, () => {
  console.log('Express corriendo en puerto 3000');
});

module.exports = app;