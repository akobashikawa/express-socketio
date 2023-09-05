const express = require('express');
const router = express.Router();
const { getConnectedUsers } = require('./SocketsManager'); // Importa la función para obtener usuarios conectados

router.get('/connection-users', (req, res) => {
  const connectedUsers = getConnectedUsers(); // Obtén la lista de usuarios conectados desde socketManager
  console.log(JSON.stringify(connectedUsers));
  res.json({ connectedUsers });
});

module.exports = router;