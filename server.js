// importar libreria sqlite3, express, body-parser
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

// middleware para info del msn Http
app.use(bodyParser.urlencoded({extended: true}));

// let db = new sqlite3.Database('proyecto-backend-db'); --> se reemplaza con el ORM sequelize

// ORM sequelize, recibe de 3 a 4 args. (BD, user, pass)
const sequelize = new Sequelize('proyecto-backend-db',null,null,{
  dialect: 'sqlite', // especificar el motor de BDD para conecar con Sequelize
  storage: './proyecto-backend-db'  // ruta al archivo que almacena BDD
});


// crear ruta POST para insertar datos en la tabla. ruta: 'http://localhost:3000/pendientes'
// modificar Key + Value en Body de Postman (description=algo)
app.post('/pendientes',function(req,res){
  // db.run(`INSERT INTO tasks(description) VALUES(?)`,req.body.description); // SANITIZE process
  res.send('Insercion Finalizada'); //respuesta de la ejecucion de la consulta
})

// puerto para escuchar
app.listen(3000);
