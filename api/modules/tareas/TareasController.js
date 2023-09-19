const obtenerTareasController = require('./features/obtenerTareas/obtenerTareasController');
const obtenerTareaController = require('./features/obtenerTarea/obtenerTareaController');
const crearTareaController = require('./features/crearTarea/crearTareaController');
const actualizarTareaController = require('./features/crearTarea/crearTareaController');
const eliminarTareaController = require('./features/crearTarea/crearTareaController');

class TareasController {
  constructor({ tareasService }) {
    this.tareasService = tareasService;
    this.getTareas = obtenerTareasController(tareasService);
    this.getTarea = obtenerTareaController(tareasService);
    this.createTarea = crearTareaController(tareasService);
    this.updateTarea = actualizarTareaController(tareasService);
    this.deleteTarea = eliminarTareaController(tareasService);
  }

}

module.exports = TareasController;