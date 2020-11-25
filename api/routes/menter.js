
var express = require('express');
var router = express.Router();
const mentersController = require('../controllers/mentersController');

//メンタープラン一覧の取得
router.get('/',mentersController.getMenters);

//メンター個別取得
router.get('/:id',mentersController.getMenter);

module.exports = router;