const Teacher = require("../models/Teacher");
const Student = require("../models/Student")
const Appointment = require("../models/Appointment")
const UserService = require("../services/UserService")
const mongoose = require("mongoose")

class TeacherController {

    static async getTeachers (req, res){
        try {
            const teachers = await Teacher.find();
            if(!teachers) return res.status(404).json({"msg":"Ainda não há professores"})

            res.status(200).json(teachers);
        } catch (error) {
            res.status(500).json({"msg":error.msg})
        }
    }
    
    static async getTeacher(req,res)
    {
        const { teacherId } = req.params;
        
        try {

            if(mongoose.Types.ObjectId.isValid(teacherId)==false)
            {
                return res.status(400).json({msg:"Requisição inválida"});
            }

            const teacher  = await Teacher.findOne({_id:teacherId})
            
            if(!teacher) return res.status(404).json({msg:"Professor(a) não encontrado"})

            return res.status(200).json(teacher);
            
        } catch (error) {
            console.error('Erro ao tentar obter o professor(a):', error);
            res.status(500).json({ msg: 'Erro no servidor', status: false });
        }
    }

    static async createTeacher(req, res) {
        const { name, email, password, sex } = req.body;
    
        try {
            
            if(!UserService.isValidEmail(email)) return res.status(400).json({msg:"Email inválido"})
            
            if (!name || !email || !password || !sex) {
                return res.status(400).json({ msg: "Preencha todos os campos!", status: false });
            }
    
            if (name.length < 2) {
                return res.status(400).json({ msg: "Insira um nome válido", status: false });
            }
            

            const hash = UserService.hashDaSenha(password);
            const emailExists = await UserService.findEmail(email)

            if(emailExists) return res.status(400).json({msg: "Esse email já foi cadastrado!", status: false});
            
            const newTeacher = new Teacher({
                name: name,
                email: email,
                password: hash,
                sex: sex,
            });
    
            const savedTeacher = await newTeacher.save();
    
            res.status(200).json({ msg: "Professor cadastrado com sucesso", status: true });
    
        } catch (error) {
            console.error('Erro ao criar o aluno:', error);
            res.status(500).json({ msg: "Erro ao criar o professor", status: false });
        }
    
    }

    static async editInfo(req, res) {
        
        const teacherId = req.user_id;
        const { specialization, resume, description } = req.body;

        try {
            if (!specialization && !resume && !description) {
                return res.status(400).json({ msg: "Você precisa preencher ao menos 1 dos campos" });
            }

            const updateFields = {};
            if (specialization) {
                updateFields.specialization = specialization;
            }
            if (resume) {
                updateFields.resume = resume;
            }
            if (description) {
                updateFields.description = description;
            }

            const updateTeacher = await Teacher.findOneAndUpdate(
                { _id: teacherId }, 
                { $set: updateFields },
                { new: true }
            );

            if(!updateTeacher) return res.status(404).json({msg:"Professor não encontrado"})

            return res.status(201).json({ msg: "Dados atualizados com sucesso!" });
        } catch (error) {
            console.error('Erro ao editar informações de professor:', error);
            return res.status(500).json({ msg: "Erro ao editar informações de professor", status: false });
        }
    }

    static async setAvailableHour(req, res) {
        const { schedule } = req.body;
        const teacherId = req.user_id;
     
    
        try {
            if (!schedule) {
                return res.status(400).json({ msg: "Esse campo não pode estar vazio!" });
            }
    
            const teacher = await Teacher.findById(teacherId);
            const student = await Student.findById(teacherId);

            if(student) return res.status(400).json({msg:"Alunos não podem disponibilizar horários"})
    
            if (!teacher) {
                return res.status(404).json({ msg: "Professor não encontrado" });
            }
    
            if (teacher.availableHours.includes(schedule)) {
                return res.status(400).json({ msg: "Esse horário já foi disponibilizado!" });
            }

            const appointmentExists = await Appointment.findOne({teacher:teacherId, date:schedule});
            if(appointmentExists) return res.status(400).json({msg:`Esse horário já está marcado com o estudante de id: ${appointmentExists.student}`})
    
            const updatedTeacher = await Teacher.findOneAndUpdate(
                { _id: teacherId },
                { $push: { availableHours: schedule } },
                { new: true }
            );
    
            return res.status(201).json({ msg: "Horário adicionado com sucesso", horario: schedule });
    
        } catch (error) {
            console.error('Erro ao definir horário disponível:', error);
            res.status(500).json({ msg: "Erro ao definir horário disponível", status: false });
        }
    }
    
    static async deleteAvailableHour(req, res) {
        const { schedule } = req.body;
        const teacherId = req.user_id;
    
        try {
            if (!schedule) {
                return res.status(400).json({ msg: "Esse campo não pode estar vazio!" });
            }
            const teacher = await Teacher.findById(teacherId);

            if (!(teacher.availableHours.includes(schedule))) {
                return res.status(400).json({ msg: "Esse horário ainda não foi disponibilizado!" });
            }

            const updatedTeacher = await Teacher.findOneAndUpdate(
                { _id: teacherId },
                { $pull: { availableHours: schedule } },
                { new: true }
            );

            return res.status(204).json({ msg: "Horário eliminado com sucesso" });
            
            
        } catch (error) {
            console.error('Erro ao definir horário disponível:', error);
            res.status(500).json({ msg: "Erro ao definir horário disponível", status: false });
        }
    }

    static async getTeacherAppointments(req, res) {
        const {teacherId} = req.params;
 
        try {
            const appointments = await Appointment.find({teacher:teacherId});
 
            return res.status(200).json(appointments);
           
        } catch (error) {
            console.error('Erro :', error);
            return res.status(500).json({ msg: "Erro ao definir horário disponível", status: false });
        }
    }

}

module.exports = TeacherController;