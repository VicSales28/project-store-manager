const salesModel = require('../models/sales.model');

const checkSaleId = async (id) => {
  const result = await salesModel.getById(id);
  return result.length === 0 ? { type: 404, data: { message: 'Sale not found' } } : null;
};

module.exports = {
  checkSaleId,
};