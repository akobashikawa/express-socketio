require('dotenv').config();

// const moment = require('moment');

const { tareasService } = require('../../dependencies/index.test.config');

describe('Se crea una tarea', () => {

    test('Se crea una tarea', async () => {
        const body = {
            texto: 'TareasService.test AAA',
        }
        const item = await tareasService.createTarea(body);
        const result = item.texto == body.texto;
        expect(result).toBe(true);
    });

});

describe('Se obtiene la lista de tareas', () => {

    test('Se obtiene la lista de tareas', async () => {
        const items = await tareasService.getTareas();
        const result = items.length >= 0;
        expect(result).toBe(true);
    });

});

describe('Se obtiene una tarea', () => {

    test('Se obtiene una tarea', async () => {
        const id = 1;
        const item = await tareasService.getTarea(id);
        const result = item.id == id;
        expect(result).toBe(true);
    });

});

describe('Se actualiza una tarea', () => {

    test('Se actualiza una tarea', async () => {
        const id = 1;
        const body = {
            texto: 'TareasService.test BBB',
        }
        const item = await tareasService.updateTarea(id, body);
        const result = item.texto == body.texto;
        expect(result).toBe(true);
    });

});