import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app: Application = express();

const productsDir = path.join(__dirname, '../src/data/phones');

app.get('/phones', cors(), (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const perPage = parseInt(req.query.perPage as string) || 16;

  fs.readdir(
    productsDir,
    (err: NodeJS.ErrnoException | null, files: string[]) => {
      if (err) {
        console.error(err);
        return res.status(500).send(['Internal Server Error']);
      }

      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const products = files.slice(startIndex, endIndex).map((file) => {
        const productData = fs.readFileSync(`${productsDir}/${file}`);
        const productJson = JSON.parse(productData.toString());
        return productJson;
      });

      res.send(products);
    }
  );
});

const port = 5000;
app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🚀 special changes for Andrew and Me`)
);
