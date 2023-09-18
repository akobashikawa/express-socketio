module.exports = (Tarea, getTarea) => async (id, body) => {
  try {
    const updated = await Tarea.update({
      ...body
    }, {
      where: { id },
    });
    const item = await getTarea(id);
    return item;
  } catch (error) {
    throw error;
  }
};