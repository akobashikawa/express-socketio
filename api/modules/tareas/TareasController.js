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

  getTarea = (req, res, next) => {
    const id = +req.params.id || null;
    HTMLFormControlsCollection.log({id});
    if (!id) {
      return res.status(400).json({
        id,
        message: 'Se requiere un id válido'
      });
    }
    try {
      const item = this.tareasService.getTarea(id);
      res.json(item);
    } catch (error) {
      res.status(500).send(error);
    }
  }

}

module.exports = TareasController;