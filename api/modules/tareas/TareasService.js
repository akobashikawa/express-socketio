class TareasService {
  constructor({ tareasRepository }) {
    this.tareasRepository = tareasRepository;
  }

  async getTareas() {
    return this.tareasRepository.getTareas();
  }

  async getTarea(id) {
    return this.tareasRepository.getTarea(id);
  }

  async createTarea(body) {
    return this.tareasRepository.createTarea(body);
  }

  async updateTarea(id, body) {
    return this.tareasRepository.updateTarea(id, body);
  }
  
  async deleteTarea(id) {
    return this.tareasRepository.deleteTarea(id);
  }
}

module.exports = TareasService;