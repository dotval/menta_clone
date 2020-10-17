var express = require('express');
var router = express.Router();
const db = require('../models/index.js');
const user = require('../models/user.js');
const users = db.user;
const usersController =require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/email', usersController.getEmail);
router.get('/:id',usersController.index);



module.exports = router;