const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Configurar CORS
app.use(cors());

// Configurar rotas
app.use('/certificacoes', require('./routes/index'));

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
