const salesService = require('../services/sales.service');

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();
  return res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  if (sale.length === 0) {
    return res.status(404).json({
      message: 'Sale not found',
    });
  }
  return res.status(200).json(sale);
};

module.exports = {
  getAll,
  getById,
};