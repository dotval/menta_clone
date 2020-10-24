var express = require('express');
var router = express.Router();48
const usersController =require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//users/email
router.get('/email', usersController.getEmail);

//users/email
router.put('/email', usersController.updateEmail);

//users/profile
router.get('/profile', usersController.profile);

//users/nda_contract
router.get('/nda_contract', usersController.nda_contract);

//users/{id}
router.get('/:id',usersController.show);


module.exports = router;
