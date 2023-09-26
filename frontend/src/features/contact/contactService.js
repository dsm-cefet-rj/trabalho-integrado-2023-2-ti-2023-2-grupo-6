import axios from "axios";

const API_URL = "http://localhost:3000";

const sendContactMessage = async (contactData) => {
  return await axios.post(API_URL + "/contact", contactData);
};

const getContacts = async () => {
  return await axios.get(API_URL + "/contact");
};

const contactService = {
  sendContactMessage,
  getContacts,
};

export default contactService;
