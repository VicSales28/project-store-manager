const express = require('express');
const productsRouter = require('./routers/products.router');
const salesRouter = require('./routers/sales.router');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use(express.json());
app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;
