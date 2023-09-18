module.exports = (Tarea) => async () => {
  try {
    const items = await Tarea.findAll();
    return items;
  } catch (error) {
    throw error;
  }
};