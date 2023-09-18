module.exports = (Tarea) => async (body) => {
  try {
    const item = await Tarea.create(body);
    return item;
  } catch (error) {
    throw error;
  }
};