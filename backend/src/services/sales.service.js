const salesModel = require('../models/sales.model');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  return sale;
};

module.exports = {
  getAll,
  getById,
};