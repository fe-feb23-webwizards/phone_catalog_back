/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const phoneDetails_1 = require('./routes/phoneDetails');
const phone_1 = require('./routes/phone');
const tokenGenerator_1 = require('./services/tokenGenerator');
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/login', (req, res) => {
  res.send({
    token: (0, tokenGenerator_1.token)(),
  });
});
app.use('/product_details', phoneDetails_1.router);
app.use('/products', phone_1.router);
app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🚀`)
);
