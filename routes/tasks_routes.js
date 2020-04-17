const express = require('express');

// llamar metodo 'Router' de express. El objeto 'router' define las rutas..
let router = express.Router();

// Definicion de rutas
router.route('/tasks').get(function(req,res){
  res.send('Hello world desde una subruta');
}).post(function(req,res){

});
// montar grupo de rutas en el servidor principal
module.exports = router;
