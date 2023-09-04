const Tarea = require('../modules/tareas/TareaModel');

module.exports = (sequelize) => {
  Tarea.init(sequelize);

  return {
    Tarea,
  }
};