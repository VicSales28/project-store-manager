const productsService = require('../services/products.service');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getById(id);
  if (type) {
    return res.status(404).send({
      message: 'Product not found',
    });
  }
  return res.status(200).json(message);
};

module.exports = {
  getAll,
  getById,
};