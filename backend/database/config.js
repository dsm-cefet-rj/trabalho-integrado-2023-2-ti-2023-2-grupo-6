const mongoose = require("mongoose");
require("dotenv").config;

//Conexão com o atlas (PODE TROCAR PARA OUTRO OU USAR O LOCALHOST)
const atlasConnection = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.w0bynd1.mongodb.net/e-stud?retryWrites=true&w=majority`;

const connection = mongoose
  .connect(`mongodb://127.0.0.1:27017/estud`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão ao banco realizada com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB: " + err);
  });

module.exports = connection;
