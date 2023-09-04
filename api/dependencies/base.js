module.exports = (sequelize) => {

  // COMPONENTS

  const {
    Tarea,
  } = models = require('./models')(sequelize);

  const {
    TareasController,
  } = controllers = require('./controllers');

  const {
    TareasService,
  } = services = require('./services');

  const {
    TareasRepository,
  } = repositories = require('./repositories');

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