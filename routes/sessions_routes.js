const express = require('express');

// enlazar metodos del controlador "sessions"
let SessionsController = require('../controllers/sessions');

let router = express.Router();

router.route('/sessions').get(SessionsController.new).post(SessionsController.create);

module.exports = router;