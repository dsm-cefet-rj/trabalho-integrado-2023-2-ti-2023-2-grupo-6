const bodyParser = require('body-parser');
const cors = require ('cors')
const appointment = require("./appointmentRoutes");
const contact = require("./contactRoutes");
const post = require("./postRoutes");
const student = require("./studentRoutes");
const teacher = require("./teacherRoutes");
const auth = require("./authRoutes.js");


module.exports = app => {

    app.get('/', (req,res)=> {
        res.status(200).json({msg:'E-stud'});
    })
    .use(
        bodyParser.json(),
        cors(),
        teacher,
        student,
        post,
        appointment,
        auth,
        contact
        
    )
}