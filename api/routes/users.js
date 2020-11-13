var express = require('express');
var router = express.Router();48
const usersController =require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/email', usersController.getEmail);
router.get('/:id',usersController.show);


module.exports = router;
