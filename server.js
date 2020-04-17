// importar libreria sqlite3, express, body-parser
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

// importar el Controlador
const tasks = require('./controllers/tasks');

// middleware para info del msn Http
app.use(bodyParser.urlencoded({extended: true}));

// ORM sequelize, recibe de 3 a 4 args. (BD, user, pass)
// const sequelize = new Sequelize('4proyecto-backend-db',null,null,{
//   dialect: 'sqlite', // especificar el motor de BDD para conecar con Sequelize
//   storage: './4proyecto-backend-db'  // ruta al archivo que almacena BDD
// });

// Integrar el motor de vistas PUG con Express
app.set('view engine','pug');

// crear ruta get que responda con funcion 'home'. Ruta: localhost:3000/tasks
app.get('/tasks',tasks.home);

// crear ruta POST para insertar datos en la tabla. ruta: 'http://localhost:3000/pendientes'
// modificar Key + Value en Body de Postman (description=algo)
app.post('/pendientes',function(req,res){
  // db.run(`INSERT INTO tasks(description) VALUES(?)`,req.body.description); // SANITIZE process
  res.send('Insercion Finalizada'); //respuesta de la ejecucion de la consulta
})

// puerto para escuchar
app.listen(3000);
