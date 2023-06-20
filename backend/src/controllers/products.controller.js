const productsService = require('../services/products.service');

const getAll = async (_req, res) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await productsService.getById(id);
    if (type) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const insert = async (req, res) => {
  try {
    const { name } = req.body;
    const { message } = await productsService.insert(name);
    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { type, data } = await productsService.update(id, name);
    return res.status(type).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
};