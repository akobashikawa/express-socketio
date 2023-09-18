module.exports = (tareasRepository) => async (id) => {
  return tareasRepository.getTarea(id);
};