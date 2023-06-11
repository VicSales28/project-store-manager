const productsModel = require('../models/products.model');

const checkProductId = async (id) => {
  const product = await productsModel.getById(id);
  return product ? null : { type: 404, data: { message: 'Product not found' } };
};

const checkAllProductsIds = async (sale) => {
  await Promise.all(sale.map(async (item) => {
    const product = await productsModel.getById(item.productId);
    if (!product) {
      throw new Error('Product not found', { cause: 404 });
    }
  }));
};

module.exports = {
  checkProductId,
  checkAllProductsIds,
};