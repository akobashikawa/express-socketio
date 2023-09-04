const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const items = [];
  res.json(items)
});

router.get('/:id', (req, res) => {
  res.json({
    id: 123,
    texto: 'Prueba',
  });
});

module.exports = router;