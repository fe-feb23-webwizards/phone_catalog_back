"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const phoneDetails_1 = require("./routes/phoneDetails");
const phone_1 = require("./routes/phone");
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/product_details', phoneDetails_1.router);
app.use('/products', phone_1.router);
// app.get('/phones', cors(), (req: Request, res: Response) => {
//   const page = parseInt(req.query.page as string) || 1;
//   const perPage = parseInt(req.query.perPage as string) || 16;
//
//   fs.readdir(
//     productsDir,
//     (err: NodeJS.ErrnoException | null, files: string[]) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send(['Internal Server Error']);
//       }
//
//       const startIndex = (page - 1) * perPage;
//       const endIndex = startIndex + perPage;
//       const products = files.slice(startIndex, endIndex).map((file) => {
//         const productData = fs.readFileSync(`${productsDir}/${file}`);
//         const productJson = JSON.parse(productData.toString());
//         return productJson;
//       });
//
//       res.send(products);
//     }
//   );
// });
//
// app.get('/phones/:phoneId', cors(), (req: Request, res: Response) => {
//   const { phoneId } = req.params;
//
//   fs.readdir(
//     productsDir,
//     (err: NodeJS.ErrnoException | null, files: string[]) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send(['Internal Server Error']);
//       }
//       const foundProduct = files.find(product => {
//         const productData = fs.readFileSync(`${productsDir}/${product}`);
//         const productJson = JSON.parse(productData.toString());
//
//         return productJson.id === productId;
//       });
//
//       if (!foundProduct) {
//         return res.status(500).send(['Product is not found']);
//       }
//
//       const productData = fs.readFileSync(`${productsDir}/${foundProduct}`);
//       const productJson = JSON.parse(productData.toString());
//
//       res.send(productJson);
//     });
// });
app.listen(port, () => console.log(`Server running on port http://localhost:${port} 🚀`));
