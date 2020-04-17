const Task = require('../models').Task; // import carpeta models (importar MODELO en sequelize)


module.exports = {
  create: function(req,res){
    Task.create({
      description: req.body.description
    }).then(result=>{
      res.json(result);
    }).catch(err=>{
      console.log(err);
      res.json(err);
    })
  }
};
