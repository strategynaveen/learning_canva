const express = require('express');
const router = express.Router();
const Code_Controller = require('../Controllers/CodeController');


router.post('/test',Code_Controller.test);

router.post('/run',Code_Controller.run_code);


module.exports = router;