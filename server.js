// importar libreria sqlite3, express, body-parser
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

// importar rutas del archivo <tasks_routes.js>
const tasksRoutes = require('./routes/tasks_routes');

// middleware para info del msn Http
app.use(bodyParser.urlencoded({extended: true}));
// Integrar el motor de vistas PUG con Express
app.set('view engine','pug');

// montar subruta en el servidor base con metodo "use"
app.use(tasksRoutes);


// puerto para escuchar
app.listen(3000);
