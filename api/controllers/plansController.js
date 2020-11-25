const db = require('../models/index.js');

exports.getPlans = function(req, res, next) {
  db.plan.findAll().then(function(results){
    res.send(results);
  });
}

exports.getPlan = function(req, res, next) {
  db.plan.findByPk(req.params.planId).then(function(results){
    res.send(results);
  });
}
