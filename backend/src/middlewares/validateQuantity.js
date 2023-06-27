const checker = (quantity) => {
  if (quantity === undefined) {
    throw new Error('"quantity" is required', { cause: 400 });
  } if (quantity < 1) {
    throw new Error('"quantity" must be greater than or equal to 1', { cause: 422 });
  }
};

const validateQuantity = async (req, res, next) => {
  const { quantity } = req.body;
  try {
    checker(quantity);
    next();
  } catch (error) {
    res.status(error.cause).json({ message: error.message });
  }
};

module.exports = {
  validateQuantity,
};