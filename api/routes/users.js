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

//users/email
router.get('/email', usersController.getEmail);

//users/profile
router.get('/profile', usersController.profile);

//users/nda_contract
router.get('/nda_contract', usersController.nda_contract);

//users/{id}
router.get('/:id',usersController.index);



module.exports = router;