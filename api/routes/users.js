var express = require('express');
var router = express.Router();48

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /users/userId
router.get('/:id', function(req, res, next) {
  const id = req.params.id;

  
  res.json(req.params.id); 
});


module.exports = router;
