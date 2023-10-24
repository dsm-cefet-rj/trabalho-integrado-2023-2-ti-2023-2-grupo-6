const Student = require("../models/Student")
const Teacher = require("../models/Teacher")
const bcrypt = require("bcrypt")

class UserService {

    static async findEmail(email)
    {
        const students = await Student.find({email:email})
        const teachers = await Teacher.find({email:email})
        if(students.length>0 || teachers.length>0) {
            return true;
        }
        else{
            return false;
         }
    }

    static hashDaSenha(pass){
        if(!pass)
        {
            return;
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pass, salt);
        return hash;
    }

    static isValidEmail(email)
    {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        
        const isValidEmail = emailRegex.test(email)
        if (isValidEmail) return true;
        return false
    }
}

module.exports = UserService;