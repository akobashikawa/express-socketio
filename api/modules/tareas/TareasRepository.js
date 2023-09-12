class TareasRepository {

  constructor({ Tarea }) {
    this.Tarea = Tarea;
  }

  async getItems() {
    try {
      const items = await this.Tarea.findAll();
      return items;
    } catch (error) {
      throw error;
    }
  }

  async getItem(id) {
    try {
      const item = await this.Tarea.findByPk(id);
      return item;
    } catch (error) {
      throw error;
    }
  }

  async createItem(body) {
    try {
      const item = await this.Tarea.create(body);
      return item;
    } catch (error) {
      throw error;
    }
  }

  async updateItem(id, body) {
    try {
      const item = await this.Tarea.update({
        ...body
      }, {
        where: { id }
      });
      return item;
    } catch (error) {
      throw error;
    }
  }

  async deleteItem(id) {
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