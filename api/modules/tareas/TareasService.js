class TareasService {
  constructor({ tareasRepository }) {
    this.tareasRepository = tareasRepository;
  }

  async getItems() {
    return this.tareasRepository.getItems();
  }

  async getItem(id) {
    return this.tareasRepository.getItem(id);
  }

  async createItem(body) {
    return this.tareasRepository.createItem(body);
  }

  async updateItem(id, body) {
    return this.tareasRepository.updateItem(id, body);
  }
  async deleteItem(id) {
    return this.tareasRepository.deleteItem(id);
  }
}

module.exports = TareasService;