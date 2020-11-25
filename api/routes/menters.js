var express = require('express');
var router = express.Router();

const db = require('../models/index');

//メンタープラン一覧の取得
router.get('/', function(req, res, next) {
  const filter ={
    include:[{
      model:db.plan
    }]
  };
  db.menter.findAll(filter).then(function(results){
    res.send(results);
  });
});

//メンタープラン詳細の取得
router.get('/:menterId', function(req, res, next) {
  const filter ={
    include:[{
      model:db.plan
    }]
  };
  db.menter.findByPk(req.params.menterId,filter).then(function(results){
    res.send(results);
  });
});

module.exports = router;
