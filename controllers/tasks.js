const Task = require('../models').Task; // import carpeta models (importar MODELO en sequelize)


module.exports = {
  home: function(req,res){
    Task.findAll().then(function(tasks){
      res.render('tasks/index',{tasks: tasks});
    })
  }
}
