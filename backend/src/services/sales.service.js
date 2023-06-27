const salesModel = require('../models/sales.model');
const { checkProductId } = require('../utils/checkProductId');
const { checkSaleId } = require('../utils/checkSaleId');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  return sale;
};

const insert = async (sale) => {
  const { insertId } = await salesModel.insertSale();

  const promises = sale.map((product) => salesModel.insertSaleProduct(product, insertId));
  await Promise.all(promises); 
  // Promise all usado para aguardar que todas as promessas retornadas por salesModel.insertSaleProduct() sejam resolvidas. Isso garante que todos os produtos sejam inseridos no banco de dados.

  return { message: { id: insertId, itemsSold: sale } };
};

const cutoff = async (id) => {
  const saleNotFound = await checkSaleId(id);
  if (saleNotFound) return saleNotFound;
  await salesModel.cutoff(id);
  return { type: 204, data: null };
};

const update = async (saleId, productId, quantity) => {
  const productNotFound = await checkProductId(productId);
  if (productNotFound) return { type: 404, data: { message: 'Product not found in sale' } };

  const saleNotFound = await checkSaleId(saleId);
  if (saleNotFound) return saleNotFound;
  
  const [{ date }] = await salesModel.update(saleId, productId, quantity);

  const data = {
    date,
    productId: Number(productId),
    quantity: Number(quantity),
    saleId: Number(saleId),
  };

  return { type: 200, data };
};

module.exports = {
  getAll,
  getById,
  insert,
  cutoff,
  update,
};