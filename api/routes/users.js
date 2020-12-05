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
router.get('/profile', usersController.getProfile);

//users/profile
router.put('/profile', usersController.updateProfile);

//users/introduce
router.get('/introduce',usersController.getIntroduceCode);

//users/nda_contract
router.get('/nda_contract', usersController.getNdaContract);

//users/nda_contract
router.put('/nda_contract', usersController.putNdaContract);

//users/password
router.put('/password',usersController.updatePassword);

//users/{id}
router.get('/:id',usersController.getUser);


module.exports = router;
