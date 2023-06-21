const productsService = require('../services/products.service');

const INTERNAL_ERROR = 'Erro interno';

const getAll = async (_req, res) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: INTERNAL_ERROR, error: error.message });
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
    return res.status(500).json({ message: INTERNAL_ERROR, error: error.message });
  }
};

const insert = async (req, res) => {
  try {
    const { name } = req.body;
    const { message } = await productsService.insert(name);
    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json({ message: INTERNAL_ERROR, error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { type, data } = await productsService.update(id, name);
    return res.status(type).json(data);
  } catch (error) {
    return res.status(500).json({ message: INTERNAL_ERROR, error: error.message });
  }
};

const cutoff = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, data } = await productsService.cutoff(id);
    return res.status(type).json(data);
  } catch (error) {
    return res.status(500).json({ message: INTERNAL_ERROR, error: error.message });
  }
};

const search = async (req, res) => {
  try {
    const { q } = req.query;
    const result = await productsService.search(q);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: INTERNAL_ERROR, error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  cutoff,
  search,
};