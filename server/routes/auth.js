const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.use(express.json({ limit: '4kb' }));

router.post('/register', authController.register);

module.exports = router;
