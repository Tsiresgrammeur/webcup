const express = require('express');
const studentController = require('../Controller/student');

const router = express.Router();

router.post('/student', studentController.createStudent)

module.exports = router;
