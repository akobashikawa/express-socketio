module.exports = (tareasServices) => async (req, res, next) => {
  const id = +req.params.id || null;
  if (!id) {
    return res.status(400).json({
      id,
      message: 'Se requiere un id válido'
    });
  }
  try {
    const item = await tareasService.getTarea(id);
    res.json(item);
  } catch (error) {
    res.status(500).send(error);
  }
};