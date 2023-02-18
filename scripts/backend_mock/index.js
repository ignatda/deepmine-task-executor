const express = require('express');
const app = express();
const port = 3000;

app.get('/api/get_last_processed_block', (req, res) => {
  const lastProcessedBlock = 12345;
  res.json({ last_processed_block: lastProcessedBlock });
});

app.get('/health', (req, res) => {
  res.json({ up: true });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});