const mongoose = require('mongoose');
const Student = require('../models/Student');
const UserService = require('../services/UserService');

class StudentController {
    static async getStudents(req, res) {
        try {
            const students = await Student.find();

            if (students.length === 0) {
                return res.status(404).json({ error: 'Ainda não há alunos' });
            }

            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor', status: false });
        }
    }

    static async getStudent(req, res) {
        const { studentId } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(studentId)) {
                return res.status(400).json({ error: 'Requisição inválida' });
            }

            const student = await Student.findOne({ _id: studentId });

            if (!student) {
                return res.status(404).json({ error: 'Estudante não encontrado' });
            }

            res.status(200).json(student);
        } catch (error) {
            console.error('Erro ao tentar obter o estudante:', error);
            res.status(500).json({ error: 'Erro no servidor', status: false });
        }
    }

    static async createStudent(req, res) {
        const { name, email, password, sex } = req.body;

        try {
            if (!UserService.isValidEmail(email)) {
                return res.status(400).json({ error: 'Email inválido' });
            }

            if (!name || !email || !password || !sex) {
                return res.status(400).json({ error: 'Preencha todos os campos!', status: false });
            }

            if (name.length < 2) {
                return res.status(400).json({ error: 'Insira um nome válido', status: false });
            }

            const hash = UserService.hashDaSenha(password);
            const emailExists = await UserService.findEmail(email);

            if (emailExists) {
                return res.status(400).json({ error: 'Esse email já foi cadastrado!', status: false });
            }

            const newStudent = new Student({
                name,
                email,
                password: hash,
                sex,
            });

            const savedStudent = await newStudent.save();

            console.log('Aluno cadastrado com sucesso:', savedStudent);
            return res.status(200).json({ msg: 'Aluno cadastrado com sucesso', status: true });
        } catch (error) {
            console.error('Erro ao criar o aluno:', error);
            return res.status(500).json({ error: 'Erro ao criar o aluno', status: false });
        }
    }
}

module.exports = StudentController;
