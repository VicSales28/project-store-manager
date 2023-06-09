const productsModel = require('../models/products.model');
const { checkProductId } = require('../utils/checkProductId');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  if (!product) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, message: product };
};

const insert = async (name) => {
  const { insertId } = await productsModel.insert(name);
  return { message: { id: insertId, name } };
};

const update = async (id, name) => {
  const productNotFound = await checkProductId(id);
  if (productNotFound) return productNotFound;
  await productsModel.update(id, name);
  const numberID = Number(id);
  return { type: 200, data: { id: numberID, name } };
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
};