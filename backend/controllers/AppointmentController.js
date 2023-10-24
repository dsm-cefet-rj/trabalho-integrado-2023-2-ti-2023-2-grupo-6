const Appointment = require("../models/Appointment");
const Teacher = require("../models/Teacher")
const Student = require("../models/Student")
const mongoose = require("mongoose")

class  AppointmentController {

    static async getAppointments(req,res)
    {
        try {
            const appointments = await Appointment.find();
            if(appointments.length==0) return res.status(404).json({msg:"Não existem nenhuma reserva"})

            return res.status(200).json(appointments)
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ msg: "Erro no servidor", status: false });
        }
    }

    static async createAppointment(req,res)
    {
        const {teacherId} = req.params;
        const studentId = req.user_id;
        const {schedule } = req.body;

        console.log('Id professor: ',teacherId, '\n', 'Id aluno: ',studentId)
        try {
            if(mongoose.Types.ObjectId.isValid(teacherId)==false)
            {
                return res.status(400).json({msg:"Requisição inválida"});
            }

            const isATeacher = await Teacher.findOne({_id:studentId})
            if(isATeacher) return res.status(400).json({msg:"Professores não podem marcar consultas com outros professores"})

            if(studentId===teacherId) return res.status(400).json({msg:"Você não pode marcar consulta consigo mesmo"})
            
            const teacherr = await Teacher.findOne({_id:teacherId});
            if(!teacherr) return res.status(404).json({msg:"Professor não encontrado"});

            if (!(teacherr.availableHours.includes(schedule))) {
                return res.status(400).json({ msg: "Esse horário ainda não foi disponibilizado!" });
            }

            const newAppointment = new Appointment({
                date: schedule,
                teacher: teacherId,
                student: studentId,  
            });
    
            await newAppointment.save();

            const updatedTeacher = await Teacher.findOneAndUpdate(
                { _id: teacherId },
                { $pull: { availableHours: schedule } },
                { new: true }
            );

            return res.status(201).json({msg:"Consulta marcada!"});

        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ msg: "Erro no servidor", status: false });
        }
    }



}

module.exports = AppointmentController;