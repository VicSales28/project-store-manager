const { checkAllProductsIds } = require('../utils/checkProductId');

const validateProductId = (item) => {
  if (item.productId === undefined) {
    throw new Error('"productId" is required', { cause: 400 });
  } 
};

const validateQuantity = (item) => {
  if (item.quantity === undefined) {
    throw new Error('"quantity" is required', { cause: 400 });
  } if (item.quantity < 1) {
    throw new Error('"quantity" must be greater than or equal to 1', { cause: 422 });
  }
};

const validateSale = async (req, res, next) => {
  const sale = req.body;
  try {
    sale.forEach((item) => {
      validateProductId(item);
      validateQuantity(item);
    });
    await checkAllProductsIds(sale);
    next();
  } catch (error) {
    res.status(error.cause).json({ message: error.message });
  }
};

module.exports = {
  validateSale,
};