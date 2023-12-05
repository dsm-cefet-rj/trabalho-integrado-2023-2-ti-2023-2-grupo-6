const { Router } = require('express');
const router = Router();
const auth = require("../middlewares/auth")
const TeacherController = require('../controllers/TeacherController.js');

router
  .get('/teachers', TeacherController.getTeachers)
  .get('/teachers/:teacherId', TeacherController.getTeacher)
  .get('/availableHours/:teacherId', TeacherController.getAvailableHours)
  .post('/teachers', TeacherController.createTeacher)
  .put('/teachers/', auth, TeacherController.editInfo)
  .post('/teachers/availablehours/:teacherId', TeacherController.setAvailableHour)
  .delete('/teachers/availablehours/:teacherId', auth, TeacherController.deleteAvailableHour)

module.exports = router;
