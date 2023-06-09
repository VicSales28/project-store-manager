const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products.controller');
const { validateName } = require('../middlewares/validateName');

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', validateName, productsController.insert);
router.put('/:id', validateName, productsController.update);

module.exports = router;