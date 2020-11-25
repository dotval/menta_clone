const db = require('../models/index.js');

exports.getMenters = function(req, res, next) {
  const filter ={
    include:[{
      model:db.plan
    }]
  };
  db.menter.findAll(filter).then(function(results){
    res.send(results);
  });
}

exports.getMenter = function(req, res, next) {
  const filter ={
    include:[{
      model:db.plan
    }]
  };
  db.menter.findByPk(req.params.menterId,filter).then(function(results){
    res.send(results);
  });
}