//registrar las rutas
const express = require('express');

// importar controlador
let RegistrationsController = require('../controllers/registrations');

// importar Router de Express
let router = express.Router();

// definir rutas
router.get('/signup',RegistrationsController.new); // mostrar form de registro

router.route('/users').post(RegistrationsController.create); // enlazar CREATE con ruta

// exportar objeto "router"
module.exports = router;
