const Student = require("../models/Student");
const UserService = require("../services/UserService");

class StudentController {

    static async getStudents (req, res){
        try {
            const students = await Student.find();
            if(!students) return res.status(404).json({"msg":"Ainda não há alunos"})

            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({"msg":error.msg})
        }
    }

    static async createStudent(req, res) {
        const { name, email, password, sex } = req.body;
    
        try {
            if(UserService.isValidEmail(email)===false) return res.status(400).json({msg:"Email inválido"})
            
            if (!name || !email || !password || !sex) {
                return res.status(400).json({ msg: "Preencha todos os campos!", status: false });
            }
    
            if (name.length < 2) {
                return res.status(400).json({ msg: "Insira um nome válido", status: false });
            }

            const hash = UserService.hashDaSenha(password);
            const emailExists = await UserService.findEmail(email)

            if(emailExists) return res.status(400).json({msg: "Esse email já foi cadastrado!", status: false});
            
            const newStudent = new Student({
                name: name,
                email: email,
                password: hash,
                sex: sex,
            });
    
            const savedStudent = await newStudent.save();
    
            console.log('Aluno cadastrado com sucesso:', savedStudent);
            return res.status(200).json({ msg: "Aluno cadastrado com sucesso", status: true });
    
        } catch (error) {
            console.error('Erro ao criar o aluno:', error);
            return res.status(500).json({ msg: "Erro ao criar o aluno", status: false });
        }
    }
}

module.exports = StudentController;