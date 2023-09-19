module.exports = (tareasRepository) => async (id, body) => {
  return tareasRepository.updateTarea(id, body);
};