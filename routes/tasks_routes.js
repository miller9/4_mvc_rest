const express = require('express');

// importar controlador para definir funcionalidad de cada ruta
let TasksController = require('../controllers/tasks');
// llamar metodo 'Router' de express. El objeto 'router' define las rutas..
let router = express.Router();

// Definicion de rutas
router.route('/tasks').get(function(req,res){
  res.send('Hello world desde una subruta');
}).post(TasksController.create);

// montar grupo de rutas en el servidor principal
module.exports = router;
