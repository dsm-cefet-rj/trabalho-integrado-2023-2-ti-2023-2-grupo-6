const { Router } = require('express');
const router = Router();
const auth = require("../middlewares/auth")
const TeacherController = require('../controllers/TeacherController.js');

router
  .get('/teachers', auth,TeacherController.getTeachers) 
  .get('/teachers/:teacherId',TeacherController.getTeacher)
  .post('/teachers', TeacherController.createTeacher)
  .put('/teachers/', auth, TeacherController.editInfo)
  .post('/teachers/availablehours/', auth, TeacherController.setAvailableHour)
  .delete('/teachers/availablehours/', auth, TeacherController.deleteAvailableHour)

module.exports = router;
