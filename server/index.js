const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'The Guardian Dog API online' });
});

app.get('/api/notifications', (req, res) => {
  res.json([
    { id: 1, title: 'Passeio em andamento', message: 'Rex está seguro e em rota monitorada.', time: '2 min atrás', unread: true },
    { id: 2, title: 'Alerta do tutor', message: 'Alex Silva confirmou sua localização.', time: '15 min atrás', unread: true },
    { id: 3, title: 'Pagamento aprovado', message: 'Seu pacote Gold foi confirmado.', time: '1h atrás', unread: false },
  ]);
});

app.post('/api/alerts', (req, res) => {
  const { latitude, longitude, petName } = req.body;

  res.json({
    success: true,
    message: 'Alerta enviado com sucesso',
    payload: {
      latitude,
      longitude,
      petName,
      timestamp: new Date().toISOString(),
    },
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
