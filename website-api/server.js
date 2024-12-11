const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use('/certificacoes', require('./routes/index'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
