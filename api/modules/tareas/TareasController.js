class TareasController {
  constructor({ tareasService }) {
    this.tareasService = tareasService;
  }

  getTareas = async (req, res, next) => {
    try {
      const items = await this.tareasService.getTareas();
      res.json(items);
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }

  getTarea = async (req, res, next) => {
    const id = +req.params.id || null;
    if (!id) {
      return res.status(400).json({
        id,
        message: 'Se requiere un id válido'
      });
    }
    try {
      const item = await this.tareasService.getTarea(id);
      res.json(item);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  createTarea = async (req, res, next) => {
    const body = req.body || null;
    if (!body) {
      return res.status(400).json({
        body: req.body,
        message: 'Se requiere un body válido'
      });
    }
    try {
      const item = await this.tareasService.createTarea(body);
      res.json(item);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  updateTarea = async (req, res, next) => {
    const id = +req.params.id || null;
    if (!id) {
      return res.status(400).json({
        id,
        message: 'Se requiere un id válido'
      });
    }

    const body = req.body || null;
    if (!body) {
      return res.status(400).json({
        body: req.body,
        message: 'Se requiere un body válido'
      });
    }
    try {
      const item = await this.tareasService.updateTarea(id, body);
      res.json(item);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  deleteTarea = async (req, res, next) => {
    const id = +req.params.id || null;
    if (!id) {
      return res.status(400).json({
        id,
        message: 'Se requiere un id válido'
      });
    }
    try {
      const result = await this.tareasService.deleteTarea(id);
      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

}

module.exports = TareasController;