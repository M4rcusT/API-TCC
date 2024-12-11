const express = require('express');
const router = express.Router();
const certificacoes = require('../data/certificacoes.json');

// Rota principal
router.get('/', (req, res) => {
  res.json(certificacoes);
});

// Rota para retornar por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const certificacao = certificacoes.find(item => item.id === id);

  if (certificacao) {
    res.json(certificacao);
  } else {
    res.status(404).json({ mensagem: 'Certificação não encontrada' });
  }
});

module.exports = router;
