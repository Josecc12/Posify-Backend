//api/auth/

const express = require('express');
const router = express.Router();

// Import the controller methods
const {
    login,
} = require('../controllers/auth');



// Handle POST requests to /api/auth/login
router.post('/login', login);


module.exports = router;