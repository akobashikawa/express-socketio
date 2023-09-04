import TareasLista from './TareasLista.js';
import TareasItem from './TareasItem.js';

const Tareas = {
  components: {
    TareasLista,
    TareasItem,
  },

  template: `<div>
    <h1>Tareas</h1>

    <div class="accordion" id="tareas">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-tareasLista" aria-expanded="false" aria-controls="flush-tareasLista">
          Lista de tareas
          </button>
        </h2>
        <div id="flush-tareasLista" class="accordion-collapse collapse">
          <div class="accordion-body">
            <TareasLista @detallereq="setIdTarea" />
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-tareasItem" aria-expanded="false" aria-controls="flush-tareasItem">
          Detalle de tarea
          </button>
        </h2>
        <div id="flush-tareasItem" class="accordion-collapse collapse">
          <div class="accordion-body">
            <TareasItem :id="idTarea"/>
          </div>
        </div>
      </div>
    </div>

  </div>`,

  data() {
    return {
      idTarea: '',
    };
  },

  methods: {
    setIdTarea(idTarea) {
      this.idTarea = idTarea;
    }
  },


};

export default Tareas;