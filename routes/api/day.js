var Promise = require('bluebird');
var dayRouter = require('express').Router();

var db = require('../../models');
var Day = db.model('day');

//gets a specific day
dayRouter.get('/api/days/:id', function(req, res, next){
  var id = +req.params.id;
  Day.findById(id)
  .then(function(result){
    res.json(result);
  })
  .catch(next);
});

//gets all days
dayRouter.get('/api/days', function(req, res, next){
  Day.findAll({})
  .then(function(alldays){
    res.send(alldays);
  })
  .catch();
});


// deletes a specific day
dayRouter.delete('/api/days/:id', function(req, res, next){
  var id = req.params.id;
  Day.destroy({
    where:{
      id: id
    }
  });

});

//creates a day instance
dayRouter.post('/api/days', function(req, res, next){
  Day.create({
    // number: ???
    // hotelId: ???
  })
  .then(function(day){
    res.json(day);
  })
  .catch(next);
});

//associates a specific day with a restaurant???
// dayRouter.post('/api/days/:id/restaurants', function(req, res){
//   var id = req.params.id;

// });

dayRouter.put('/api/days/:id/:thing', function(req, res){
  var id = +req.params.id;
  var thing = req.params.thing;
  console.log('hello');


    Day.findById(id)
    .then(function(foundDay){
      if (thing === 'activity'){
        foundDay.addActivity(req.body.id);
      } else if (thing === 'restaurant'){
        foundDay.addRestaurant(req.body.id);
      } else if (thing === 'hotel'){
        foundDay.setHotel(req.body.id);
      }
  })
  .then(function(result){
    res.status(200).send(result);
  })
  .catch(console.log);


});



module.exports = dayRouter;
