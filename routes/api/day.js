var Promise = require('bluebird');
var dayRouter = require('express').Router();

var db = require('../../models');
var Day = db.model('day');

dayRouter.get('/api/days', function(req, res, next){
  Day.findAll({})
  .then(function(alldays){
    res.send(alldays);
    //console.log(alldays);
  })
  .catch();
});

dayRouter.get('api/day/:id', function(req, res, next){
  var id = req.params.id;
  Day.findById(id)
  .then(function(result){
    console.log(result);
  })
  .catch();
});

dayRouter.delete('/api/day/:id', function(req, res, next){
  var id = req.params.id;
  Day.destroy({
    where:{
      id: id
    }
  });

});

dayRouter.post('/api/days', function(req, res, next){
  Day.create({

  });
});

dayRouter.post('/api/days/:id/restaurants', function(req, res){
  var id = req.params.id;

});

module.exports = dayRouter;
