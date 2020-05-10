var express = require('express')
var router = express.Route();
var PlansController = require('../controllers/PlansController');


router.get('/plans', PlansController.index);

router.get("/admin/plans/create", PlansController.create);

module.exports = router;