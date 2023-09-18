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

  async getTarea(id) {console.log('TareasRepository.getTarea', id)
    try {
      const item = await this.Tarea.findByPk(id, { raw: true });
      return item;
    } catch (error) {
      throw error;
    }
  }

  async createTarea(body) {
    try {
      const item = await this.Tarea.create(body);
      return item;
    } catch (error) {
      throw error;
    }
  }

  async updateTarea(id, body) {
    try {
      const updated = await this.Tarea.update({
        ...body
      }, {
        where: { id },
      });
      const item = await this.getTarea(id);
      return item;
    } catch (error) {
      throw error;
    }
  }

  async deleteTarea(id) {
    try {
      const result = await this.Tarea.destroy({
        where: { id }
      });
      if (result > 0) {
        return id;
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = TareasRepository;