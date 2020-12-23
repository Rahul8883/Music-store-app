const express = require('express');
const userCOntroller = require('../controller/user.controller')
const router = express.Router();

router.post('/register', userCOntroller.registration);
router.post('/login', userCOntroller.login);
module.exports = router;