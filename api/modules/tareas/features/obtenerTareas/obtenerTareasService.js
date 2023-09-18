module.exports = (tareasRepository) => async () => {
  return tareasRepository.getTareas();
};