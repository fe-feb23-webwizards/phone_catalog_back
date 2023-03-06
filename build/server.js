'use strict';
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
const cors_1 = __importDefault(require('cors'));
const app = (0, express_1.default)();
const phonesDir = path_1.default.join(__dirname, './data/phones');
app.get('/phones', (req, res) => {
  const phones = [];
  fs_1.default.readdir(phonesDir, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send(['Internal Server Error']);
    }
    files.forEach((file) => {
      const phoneData = fs_1.default.readFileSync(`${phonesDir}/${file}`);
      const phoneJson = JSON.parse(phoneData.toString());
      phones.push(phoneJson);
    });
    res.send(phones);
  });
});
app.use((0, cors_1.default)({
  origin: [
    'http://localhost:3000',
    'https://fe-feb23-webwizards.github.io',
  ],
}));
const port = 5000;
app.listen(port, () => console.log(`Server running on port http://localhost:${port} 🚀`));
