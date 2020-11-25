var express = require('express');
var router = express.Router();
const plansController =require('../controllers/plansController');

//プラン一覧の取得
router.get('/', plansController.getPlans);

//プラン詳細の取得
router.get('/:planId', plansController.getPlan);

module.exports = router;
