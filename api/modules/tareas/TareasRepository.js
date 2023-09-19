const obtenerTareasRepository = require('./features/obtenerTareas/obtenerTareasRepository');
const obtenerTareaRepository = require('./features/obtenerTarea/obtenerTareaRepository');
const crearTareaRepository = require('./features/crearTarea/crearTareaRepository');
const actualizarTareaRepository = require('./features/actualizarTarea/actualizarTareaRepository');
const eliminarTareaRepository = require('./features/eliminarTarea/eliminarTareaRepository');

class TareasRepository {

  constructor({ Tarea }) {
    this.Tarea = Tarea;
    this.getTareas = obtenerTareasRepository(Tarea);
    this.getTarea = obtenerTareaRepository(Tarea);
    this.createTarea = crearTareaRepository(Tarea);
    this.updateTarea = actualizarTareaRepository(Tarea, this.getTarea);
    this.deleteTarea = eliminarTareaRepository(Tarea);
  }

}

module.exports = TareasRepository;