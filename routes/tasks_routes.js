const express = require('express');

// importar controlador para definir funcionalidad de cada ruta
let TasksController = require('../controllers/tasks');
// llamar metodo 'Router' de express. El objeto 'router' define las rutas..
let router = express.Router();

// Definicion de rutas
router.route('/tasks').get(TasksController.index).post(TasksController.create);

// definir ruta GET para eventualmente crear un nuevo registro
router.get('/tasks/new',TasksController.new);

// ruta para PUT, PATCH, DELETE
router.get('/tasks/:id/edit',TasksController.edit);

// Agrupar rutas - definir recurso. Identificador del recurso. (wildcard)
router.route('/tasks/:id').get(TasksController.show).put(TasksController.update);

// montar grupo de rutas en el servidor principal
module.exports = router;
