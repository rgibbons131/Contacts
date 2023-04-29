const express = require('express');

const professionalController = require('../controllers/contacts.js');

const router = express.Router();

// GET /feed/posts
router.get('/allusers', professionalController.getData);
router.get('/user/:userId', professionalController.getUser);

router.get('');
module.exports = router;