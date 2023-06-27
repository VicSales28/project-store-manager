const express = require('express');

const router = express.Router();

const salesController = require('../controllers/sales.controller');
const { validateSale } = require('../middlewares/validateSale');
const { validateQuantity } = require('../middlewares/validateQuantity');

router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
router.post('/', validateSale, salesController.insert);
router.delete('/:id', salesController.cutoff);
router.put('/:saleId/products/:productId/quantity', validateQuantity, salesController.update);

module.exports = router;