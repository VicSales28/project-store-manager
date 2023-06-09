const productsModel = require('../models/products.model');

const checkProductId = async (id) => {
  const product = await productsModel.getById(id);
  return product ? null : { type: 404, data: { message: 'Product not found' } };
};

module.exports = {
  checkProductId,
};