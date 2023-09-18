module.exports = (tareasRepository) => async (id) => {
  return tareasRepository.deleteTarea(id);
};