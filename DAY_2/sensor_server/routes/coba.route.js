var express = require('express');
var router = express.Router();
const coba_controller = require('../controllers/coba.controller');

router.post('/create',coba_controller.createData);
router.get('/',coba_controller.getData);
module.exports = router;
