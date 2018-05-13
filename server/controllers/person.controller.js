const Person = require('../models/Person');

function personController(){
  
  function load(req, res){
    const personId = req.params.id;
    Person.findById(personId, function(err, doc){
      if(!err && doc){
        res.status(200).json(doc);
      }else if(err){
        res.status(500).json({message: "Error loading:" + err})
      }else{
        res.status(404).json({message: "Not found"})
      }
    });
  }

  function create(req, res, next){
    const person = Person({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });

    person.save(function(err){
      if(err)
        res.status(500).json(err);
      res.status(200).json({message: 'Ok'});
    });
  }

  function list(req, res){
    Person.find({}, function(err, doc){
      if(err){
        res.status(500).json({message: err});
      }
      res.status(200).json(doc);
    });
  }

  function update(req, res){
    const personId = req.params.id;
    
    const person = Person({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });

    Person.findByIdAndUpdate(personId, person, function(err, tank){
      if(err){
        res.status(500).json({message:err});
      }
      res.status(200).json(tank);
    })
  }

  function remove(req, res){
    const personId = req.params.id;
    Person.findByIdAndRemove(personId, function(err, doc){
      if(err){
        res.status(500).json({message: err});
      }
      res.status(200).json(doc);
    });
  }
  return {
    create: create,
    load: load,
    list: list,
    update: update,
    remove: remove
  }
}

module.exports = personController();