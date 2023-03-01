import express from 'express';

const PORT = 3000;

const app = express();

app.use('/', (req, res) => {
  res.send('Hello, web wizards');
});

app.listen(PORT, ( => {
  console.log(`API is ready on http://localhost:${PORT}`);
});