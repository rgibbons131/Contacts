const express = require('express');

const professionalController = require('../controllers/contacts.js');

const router = express.Router();

// GET /feed/posts
router.get('/allusers', professionalController.getData);
router.get('/user/:userId', professionalController.getUser);
router.post('/user', professionalController.postUser);
router.put('/user/:userId', professionalController.putUser);
router.delete('/user/:userId', professionalController.deleteUser);

router.get('');
module.exports = router;
