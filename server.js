#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./app');
const debug = require('debug')('express-io:server');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { configureSocket } = require('./api/modules/sockets/SocketsManager');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = null;

if (process.env.SSL && process.env.SSL=='yes') {
  console.log(`HTTPS: port ${port}, SSL [${process.env.SSL_KEYPATH}, ${process.env.SSL_CRTPATH}]`);
  const options = {
    key: fs.readFileSync(path.resolve(process.env.SSL_KEYPATH)),
    cert: fs.readFileSync(path.resolve(process.env.SSL_CRTPATH)),
  };
  server = https.createServer(options, app);
} else {
  console.log(`HTTP: port ${port}`);
  server = http.createServer(app);
}

const io = configureSocket(server);
app.set('io', io);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
