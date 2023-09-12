module.exports = (sequelize) => {

  // COMPONENTS

  const {
    Tarea,
  } = models = require('./models')(sequelize);

  const TareasController = require('../modules/tareas/TareasController');
  const NodosController = require('../modules/nodos/NodosController');

  const controllers = {
    TareasController,
    NodosController,
  };

  const TareasService = require('../modules/tareas/TareasService');
  const NodosService = require('../modules/nodos/NodosService');

  const services = {
    TareasService,
    NodosService,
  };

  const TareasRepository = require('../modules/tareas/TareasRepository');
  const NodosRepository = require('../modules/nodos/NodosRepository');

  const repositories = {
    TareasRepository,
    NodosRepository,
  };

  // CONFIG

  const tareasRepository = new TareasRepository({ Tarea });
  const tareasService = new TareasService({ tareasRepository });
  const tareasController = new TareasController({ tareasService });

  const nodosRepository = new NodosRepository();
  const nodosService = new NodosService({ nodosRepository });
  const nodosController = new NodosController({ nodosService });

  // PUB

  return {
    ...models,
    ...controllers,
    ...services,
    ...repositories,

    tareasRepository,
    tareasService,
    tareasController,

    nodosRepository,
    nodosService,
    nodosController,
  }
}