"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const productsDir = path_1.default.join(__dirname, '../src/data/phones');
app.get('/phones', (0, cors_1.default)(), (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 16;
    fs_1.default.readdir(productsDir, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send(['Internal Server Error']);
        }
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const products = files.slice(startIndex, endIndex).map((file) => {
            const productData = fs_1.default.readFileSync(`${productsDir}/${file}`);
            const productJson = JSON.parse(productData.toString());
            return productJson;
        });
        res.send(products);
    });
});
const port = 5000;
app.listen(port, () => console.log(`Server running on port http://localhost:${port} 🚀 hello`));
