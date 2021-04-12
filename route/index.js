const express = require('express');
const studentController = require('../Controller/student');
const managerController = require('../Controller/manager')

const router = express.Router();

router.get('/student/:id',studentController.getStudent);
router.post('/student', studentController.createStudent);
router.delete('/student/:id',studentController.deleteStudent);
router.put('/student/:id',studentController.updateStudent)
router.get('/manager/:id',managerController.getManager);
router.post('/manager', managerController.createManager);
router.delete('/manager/:id',managerController.deleteManager);
router.put('/manager/:id',managerController.updateManager)


module.exports = router;
