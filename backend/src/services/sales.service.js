const salesModel = require('../models/sales.model');

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

module.exports = {
  getAll,
  getById,
  insert,
};