const Student = require ("../models/Student");
const Teacher = require("../models/Teacher");
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
require('dotenv').config();

class AuthController 
{
    static async login(req, res) {
    
        const { email, password } = req.body;

        try {
            
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ msg: "Preencha todos os campos obrigatórios", status: false });
            }

            const student = await Student.findOne({email:email});
            console.log(student)
        
            const teacher = await Teacher.findOne({email:email});
            console.log(teacher)

            if(!teacher && !student) 
            {
                return res
                    .status(404)
                    .json({ msg: "Usuário não existe!", status: false });
            }

            else if(student)
            {
                const verificaPassword = await bcrypt.compare(password, student.password);
                if (!verificaPassword) return res.status(401).json({ msg: "Senha incorreta", status: false });

                const { _id } = student;
                
                const token = jwt.sign({ id: _id }, process.env.SECRET, {expiresIn: "10h"});

                return res.status(200).json({
                    id: _id,
                    token,
                    status: true,
                });
            }
            else if(teacher)
            {
                const verificaPassword = await bcrypt.compare(password, teacher.password);
                if (!verificaPassword) return res.status(401).json({ msg: "Senha incorreta", status: false });

                const { _id } = teacher;
                
                const token = jwt.sign({ id: _id }, process.env.SECRET, {expiresIn: "10h"});

                return res.status(200).json({
                    id: _id,
                    token,
                    status: true,
                });
            }
            
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msg: "Erro no servidor", status: false });
        }
    }
}

module.exports = AuthController;