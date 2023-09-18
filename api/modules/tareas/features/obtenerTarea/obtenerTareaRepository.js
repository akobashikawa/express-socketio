module.exports = (Tarea) => async (id) => {
  try {
    const item = await Tarea.findByPk(id, { raw: true });
    return item;
  } catch (error) {
    throw error;
  }
};