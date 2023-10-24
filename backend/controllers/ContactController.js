const mongoose = require("mongoose")
const Contact = require("../models/Contact")
const UserService = require("../services/UserService")

class ContactController {

    static async createContact (req,res)
    {
        const {email, content, message} = req.body

        try {
            if(!email || !content || !message) return res.status(400).json({msg:"Preencha todos os campos!"})
            console.log(email, content, message)

            if(content.length<10 || message.length) {
                return res.status(400).json({msg:"Digite uma mensagem de pelo menos 10 caracteres"})
            }
            
            if(!UserService.isValidEmail(email)) return res.status(400).json({msg:"Email inválido"})
            
                const newContact = await new Contact(
                    {
                        email,
                        content,
                        message
                    }
                )
                newContact.save()
                return res.status(201).json({msg:"Contato enviado com sucesso!"});
            
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({ msg: "Erro no servidor", status: false });
        }
    }
  
  static async getContacts(req, res) {
    try {
      const contacts = await Contact.find();
  
      if (contacts.length === 0) return res.status(200).json({ msg: "Não há nenhuma mensagem de contato ainda" });
      
  
      return res.status(200).json(contacts);
  
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ msg: "Erro no servidor", status: false });
    }
  }
}


module.exports = ContactController