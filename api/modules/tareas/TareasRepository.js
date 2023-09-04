class TareasRepository {

  constructor({ Tarea }) {
    this.Tarea = Tarea;
  }

  async getTareas() {
    try {
      const items = await this.Tareas.findAll();
      return items;
    } catch (error) {
      throw error;
    }
  }

  async getTarea(id) {
    try {
      const items = await this.Tareas.findByPk(id);
      return items;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = TareasRepository;