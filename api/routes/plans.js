var express = require('express');
var router = express.Router();

const db = require('../models/index');

//プラン一覧の取得
router.get('/', function(req, res, next) {
  db.plan.findAll().then(function(results){
    res.send(results);
  });
});

module.exports = router;
