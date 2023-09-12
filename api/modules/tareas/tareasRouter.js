const express = require('express');
const router = express.Router();

const { tareasController } = require('../../dependencies');

router.get('/', tareasController.getItems /*
#swagger.description = 'Obtiene la lista de tareas'
*/);

router.get('/:id', tareasController.getItem /*
#swagger.description = 'Obtiene la tarea especificada'
#swagger.parameters['id'] = { description: 'id de la tarea', schema: { type: 'integer' } }
*/);

router.post('/', tareasController.createItem /*
#swagger.description = 'Crea una tarea y la devuelve'
#swagger.parameters['body'] = {
        in: 'body',
        schema: {
        $ref: '#/definitions/saveTarea'
        }
}
*/);
router.patch('/:id', tareasController.updateItem /*
#swagger.description = 'Modifica una tarea y la devuelve'
#swagger.parameters['id'] = { description: 'id de la tarea', schema: { type: 'integer' } }
#swagger.parameters['body'] = {
        in: 'body',
        schema: {
        $ref: '#/definitions/saveTarea'
        }
}
*/);

router.delete('/:id', tareasController.deleteItem /*
#swagger.description = 'Elimina la tarea especificada y devuelve el id'
#swagger.parameters['id'] = { description: 'id de la tarea', schema: { type: 'integer' } }
*/);

module.exports = router;