const express = require('express');
const router = express.Router();

const { nodosController } = require('../../dependencies');

router.get('/', nodosController.getItems /*
#swagger.description = 'Obtiene la lista de nodos'
*/);

router.get('/:id', nodosController.getItem /*
#swagger.description = 'Obtiene el nodo especificado'
#swagger.parameters['id'] = { description: 'id de el nodo', schema: { type: 'integer' } }
*/);

router.post('/', nodosController.createItem /*
#swagger.description = 'Crea un nodo y lo devuelve'
#swagger.parameters['body'] = {
        in: 'body',
        schema: {
        $ref: '#/definitions/saveTarea'
        }
}
*/);
router.patch('/:id', nodosController.updateItem /*
#swagger.description = 'Modifica un nodo y lo devuelve'
#swagger.parameters['id'] = { description: 'id de el nodo', schema: { type: 'integer' } }
#swagger.parameters['body'] = {
        in: 'body',
        schema: {
        $ref: '#/definitions/saveTarea'
        }
}
*/);

router.delete('/:id', nodosController.deleteItem /*
#swagger.description = 'Elimina el nodo especificado y devuelve el id'
#swagger.parameters['id'] = { description: 'id de el nodo', schema: { type: 'integer' } }
*/);

module.exports = router;