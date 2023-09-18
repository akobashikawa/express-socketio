module.exports = (sequelize) => {

  // COMPONENTS

  const {
    Tarea,
  } = models = require('./models')(sequelize);

  const TareasController = require('../modules/tareas/TareasController');

  const controllers = {
    TareasController,
  };

  const TareasService = require('../modules/tareas/TareasService');

  const services = {
    TareasService,
  };

  const TareasRepository = require('../modules/tareas/TareasRepository');

  const repositories = {
    TareasRepository,
  };

  // CONFIG

  const tareasRepository = new TareasRepository({ Tarea });

  const tareasService = new TareasService({ tareasRepository });

  const tareasController = new TareasController({ tareasService });

  // PUB

  return {
    ...models,
    ...controllers,
    ...services,
    ...repositories,

    tareasRepository,
    tareasService,
    tareasController,
  }
}