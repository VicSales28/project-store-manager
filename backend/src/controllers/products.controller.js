const productsService = require('../services/products.service');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getById(id);
  if (type) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  return res.status(200).json(message);
};

const insert = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.insert(name);
  return res.status(201).json(message);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, data } = await productsService.update(id, name);
  return res.status(type).json(data);
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
};