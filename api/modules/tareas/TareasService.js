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
}

module.exports = TareasService;