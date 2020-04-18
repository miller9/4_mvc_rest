// importar libreria sqlite3, express, body-parser
const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');

const app = express();

// importar rutas del archivo <tasks_routes.js>
const tasksRoutes = require('./routes/tasks_routes');

// importar rutas para registro  de <registrations_routes.js>
const registrationsRoutes = require('./routes/registrations_routes');


const sessionsRoutes = require('./routes/sessions_routes');

// middleware para info del msn Http
app.use(bodyParser.urlencoded({extended: true}));

// middleware para PUT, PATCH, DELETE
app.use(methodOverride('_method'));

// Integrar el motor de vistas PUG con Express
app.set('view engine','pug');

// montar subruta en el servidor base con metodo "use"
app.use(tasksRoutes);

// montar subruta de registros
app.use(registrationsRoutes);

app.use(sessionsRoutes);

// POST http://localhost:3000/tasks/2?_method=PUT
// POST http://localhost:3000/tasks/2?_method=DELETE


// puerto para escuchar
app.listen(3000);
