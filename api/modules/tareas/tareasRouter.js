const express = require('express');
const router = express.Router();

const { tareasController } = require('../../dependencies');

router.get('/', tareasController.getTareas);

router.get('/:id', tareasController.getTarea);

module.exports = router;