module.exports = (tareasService) => async (req, res, next) => {
  const io = req.app.get('io');

  const body = req.body || null;
  if (!body) {
    return res.status(400).json({
      body: req.body,
      message: 'Se requiere un body válido'
    });
  }
  try {
    const item = await tareasService.createTarea(body);
    io.emit('tareaCreated', item);
    res.json(item);
  } catch (error) {
    res.status(500).send(error);
  }
};