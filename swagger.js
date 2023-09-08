require('dotenv').config(); 
const swaggerAutogen = require('swagger-autogen')({ language: 'es-ES' });

const PORT = process.env.PORT;
const HOST = `${process.env.HOST}:${PORT}`;

const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];
const doc = {
    info: {
        version: "1.0.0",
        title: "Express SocketIO Tareas",
        description: "API de Tareas"
    },
    host: HOST,
    basePath: "/",
    // schemes: ['https', 'http'],
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        saveTarea: {
            "texto": "Ejemplo",
        },
    }
};

swaggerAutogen(outputFile, endpointsFiles, doc);