const express = require('express');

const router = express.Router();

const salesController = require('../controllers/sales.controller');
const { validateSale } = require('../middlewares/validateSale');

router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
router.post('/', validateSale, salesController.insert);
router.delete('/:id', salesController.cutoff);

module.exports = router;