module.exports = (tareasServices) => async (req, res, next) => {
  const io = req.app.get('io');

  const id = +req.params.id || null;
  if (!id) {
    return res.status(400).json({
      id,
      message: 'Se requiere un id válido'
    });
  }
  try {
    const result = await tareasService.deleteTarea(id);
    io.emit('tareaDeleted', result);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};