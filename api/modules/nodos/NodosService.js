class NodosService {
  constructor({ nodosRepository }) {
    this.nodosRepository = nodosRepository;
  }

  async getItems() {
    return this.nodosRepository.getItems();
  }

  async getItem(id) {
    return this.nodosRepository.getItem(id);
  }

  async createItem(body) {
    return this.nodosRepository.createItem(body);
  }

  async updateItem(id, body) {
    return this.nodosRepository.updateItem(id, body);
  }
  async deleteItem(id) {
    return this.nodosRepository.deleteItem(id);
  }
}

module.exports = NodosService;