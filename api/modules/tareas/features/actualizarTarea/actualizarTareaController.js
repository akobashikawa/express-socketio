module.exports = (tareasService) => async (req, res, next) => {
  const io = req.app.get('io');

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
    const item = await tareasService.updateTarea(id, body);
    io.emit('tareaUpdated', item);
    res.json(item);
  } catch (error) {
    res.status(500).send(error);
  }
};