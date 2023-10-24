const {Router} = require('express');
const router = Router();
const AppointmentsController = require("../controllers/AppointmentController");
const auth = require("../middlewares/auth")

router
.get('/appointments',auth, AppointmentsController.getAppointments)
.post('/appointments/:teacherId',auth, AppointmentsController.createAppointment)

module.exports = router;