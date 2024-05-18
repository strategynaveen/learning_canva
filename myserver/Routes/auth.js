const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

// router.post('/login', authController.login);

router.get('/api', authController.login);

router.post('/apidate',authController.getdata);

module.exports = router;
