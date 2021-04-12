const express = require('express');
const studentController = require('../Controller/student');

const router = express.Router();

router.get('/student/:id',studentController.getStudent);
router.post('/student', studentController.createStudent);
router.delete('/student/:id',studentController.deleteStudent);
router.put('/student/:id',studentController.updateStudent)

module.exports = router;
