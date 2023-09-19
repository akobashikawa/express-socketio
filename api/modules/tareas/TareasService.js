const obtenerTareasService = require('./features/obtenerTareas/obtenerTareasService');
const obtenerTareaService = require('./features/obtenerTarea/obtenerTareaService');
const crearTareaService = require('./features/crearTarea/crearTareaService');
const actualizarTareaService = require('./features/actualizarTarea/actualizarTareaService');
const eliminarTareaService = require('./features/eliminarTarea/eliminarTareaService');

class TareasService {
  constructor({ tareasRepository }) {
    this.tareasRepository = tareasRepository;
    this.getTareas = obtenerTareasService(tareasRepository);
    this.getTarea = obtenerTareaService(tareasRepository);
    this.createTarea = crearTareaService(tareasRepository);
    this.updateTarea = actualizarTareaService(tareasRepository);
    this.deleteTarea = eliminarTareaService(tareasRepository);
  }
  
}

module.exports = TareasService;