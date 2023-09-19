module.exports = (Tarea) => async (id) => {
  try {
    const result = await Tarea.destroy({
      where: { id }
    });
    if (result > 0) {
      return id;
    }
    return result;
  } catch (error) {
    throw error;
  }
};