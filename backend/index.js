const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Backend funcionando desde Docker 🚀' });
});

app.listen(3000, () => {
  console.log('Servidor backend en puerto 3000');
});
