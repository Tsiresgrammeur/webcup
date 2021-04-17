const express = require('express');
const studentController = require('../Controller/student');
const managerController = require('../Controller/manager')
const waitingController = require('../Controller/waiting')
const groupController = require('../Controller/Groups')

const router = express.Router();

router.get('/student/:id',studentController.getStudent);
router.post('/student', studentController.createStudent);
router.delete('/student/:id',studentController.deleteStudent);
router.put('/student/:id',studentController.updateStudent)
router.get('/manager/:id',managerController.getManager);
router.post('/manager', managerController.createManager);
router.delete('/manager/:id',managerController.deleteManager);
router.put('/manager/:id',managerController.updateManager)
router.get('/waiting/:id',waitingController.getWaiting);
router.post('/waiting', waitingController.createWaiting);
router.delete('/waiting/:id',waitingController.deleteWaiting);
router.get('/group/:id',groupController.getGroup);
router.put('/group/:id',groupController.updateGroup);
router.post('/group', groupController.createGroup);
router.delete('/group/:id',groupController.deleteGroup);


module.exports = router;
