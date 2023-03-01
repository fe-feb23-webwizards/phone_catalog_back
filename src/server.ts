import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/', (req, res) => {
  res.send('Hello, web wizards');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API is ready on http://localhost:${PORT}`);
});
