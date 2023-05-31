const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT 
    sp.sale_id AS saleId,
    s.date,
    sp.product_id AS productId,
    sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    ORDER BY sp.sale_id ASC,
    sp.product_id ASC;`,
  );
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT 
    s.date,
    sp.product_id AS productId,
    sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    WHERE s.id = ?
    ORDER BY sp.sale_id ASC,
    sp.product_id ASC;`,
    [id],
  );
  return sale;
};

const insertSale = async () => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  return result;
};

const insertSaleProduct = async ({ productId, quantity }, id) => {
  const [result] = await connection.execute(
  `INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity) 
  VALUES (?, ?, ?)`, 
  [id, productId, quantity],
  );
  return result;
};

module.exports = {
  getAll,
  getById,
  insertSale,
  insertSaleProduct,
};