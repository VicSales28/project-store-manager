const productsModel = require('../models/products.model');

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
  return { type: 201, message: { id: insertId, name } };
};

module.exports = {
  getAll,
  getById,
  insert,
};