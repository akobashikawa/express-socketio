class TareasRepository {

  constructor({ Tarea }) {
    this.Tarea = Tarea;
  }

  async getTareas() {
    try {
      const items = await this.Tarea.findAll();
      return items;
    } catch (error) {
      throw error;
    }
  }

  async getTarea(id) {
    try {
      const items = await this.Tarea.findByPk(id);
      return items;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = TareasRepository;