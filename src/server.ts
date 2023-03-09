import express from 'express';
import cors from 'cors';

import { router as phoneDetailsRouter } from './routes/phoneDetails';
import { router as phonesRouter } from './routes/phone';
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

app.use('/product_details', phoneDetailsRouter);
app.use('/products', phonesRouter);

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🚀`)
);
