const { Router } = require('express');
const router = Router();
const AppointmentsController = require("../controllers/AppointmentController");
const auth = require("../middlewares/auth")

router
  .get('/appointments', AppointmentsController.getAppointments)
  .post('/appointments/:teacherId/:studentId', AppointmentsController.createAppointment)
  .get('/appointments/:id', AppointmentsController.getAppointmentsById)

module.exports = router;