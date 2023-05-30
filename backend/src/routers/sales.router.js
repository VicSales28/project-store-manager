const express = require('express');

const router = express.Router();

const salesController = require('../controllers/sales.controller');

router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);

module.exports = router;