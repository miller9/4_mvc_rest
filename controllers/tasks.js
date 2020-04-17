const Task = require('../models').Task; // import carpeta models (importar MODELO en sequelize)


module.exports = {
  index: function(req,res){
    Task.findAll().then((tasks)=>{
      res.render('tasks/index',{ //res.json(tasks);
        tasks: tasks
      });
    })
  },
  show: function(req,res){
    Task.findByPk(req.params.id).then(function(task){
      res.render('tasks/show',{
        task: task
      })
    })
  },
  create: function(req,res){
    Task.create({
      description: req.body.description
    }).then(result=>{
      res.json(result);
    }).catch(err=>{
      console.log(err);
      res.json(err);
    })
  },
  new: function(req,res){ // funcion para la ruta 'new'
    res.render('tasks/new'); // indicar la ruta de la vista
  }
};
