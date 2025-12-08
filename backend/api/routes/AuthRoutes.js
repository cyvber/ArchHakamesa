const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
// Routes
router.post('/admin-login', AuthController.login);

module.exports = router;