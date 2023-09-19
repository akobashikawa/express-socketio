module.exports = (tareasService) => async (req, res, next) => {
  try {
    const items = await tareasService.getTareas();
    res.json(items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
};