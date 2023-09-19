module.exports = (tareasServices) => async (req, res, next) => {
  try {
    const items = await tareasServices.getTareas();
    res.json(items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
};