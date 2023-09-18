module.exports = (tareasRepository) => async (body) => {
  return tareasRepository.createTarea(body);
};