const mongoose = require("mongoose");
require("dotenv").config;

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
