import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Phone } from './types/Phones';
import cors from 'cors';

const app: Application = express();

const phonesDir = path.join(__dirname, './data/phones');

app.get('/', (req: Request, res: Response) => {
  const phones: Phone[] = [];

  fs.readdir(
    phonesDir,
    (err: NodeJS.ErrnoException | null, files: string[]) => {
      if (err) {
        console.error(err);
        return res.status(500).send(['Internal Server Error']);
      }

      files.forEach((file) => {
        const phoneData = fs.readFileSync(`${phonesDir}/${file}`);
        const phoneJson = JSON.parse(phoneData.toString());
        phones.push(phoneJson);
      });

      res.send(phones);
    }
  );
});

app.use(cors({
  origin: [
    'http://localhost:3000/phone_catalog_front',
    'https://fe-feb23-webwizards.github.io/phone_catalog_front/'
  ]
}));

const port = 5000;
app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🚀`)
);
