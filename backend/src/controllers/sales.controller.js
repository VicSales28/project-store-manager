const salesService = require('../services/sales.service');

const getAll = async (_req, res) => {
  try {
    const sales = await salesService.getAll();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getById(id);
    if (sale.length === 0) {
      return res.status(404).json({
        message: 'Sale not found',
      });
    }
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

const insert = async (req, res) => {
  try {
    const sale = req.body;
    const { message } = await salesService.insert(sale);
    return res.status(201).json(message);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  insert,
};