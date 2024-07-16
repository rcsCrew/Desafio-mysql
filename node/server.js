const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./src/rota/rota");

// Config DB
const db = require("./src/models");

// Sincroniza o banco de dados
db.sequelize.sync()
  .then(() => {
    console.log("✔ - DB CONNECTED");
  })
  .catch(err => {
    console.log("❌ - Erro ao conectar no banco de dados: " + err.message);
  });

  const corsOptions = {
    origin: "http://localhost:8081", // ROTA PARA O ANGULAR CHAMAR
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // GET , POST OK
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

app.use(cors(corsOptions));

// 
app.use(express.json());

// 
app.use(express.urlencoded({ extended: true }));

// Roteamento
app.use("/api", routes); // Prefixo /api para todas as rotas

// Rota simples para verificar se o servidor está rodando // localhost:8080
app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo à aplicação." });
});
//
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


// Set PORTA
const PORTA = process.env.PORT || 8080;
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}.`);
});
