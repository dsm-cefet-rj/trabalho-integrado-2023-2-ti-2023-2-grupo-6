const {Router} = require('express');
const router = Router();
const ContactController = require("../controllers/ContactController");

router
.get("/contact", ContactController.getContacts)
.post("/contact", ContactController.createContact)


module.exports = router;