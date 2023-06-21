const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
  return products;
};

const getById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = (?)',
    [id],
  );
  return product;
};

const insert = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  // console.log(result); ==> [ { id: 4, name: 'Manopla do Infinito' } ]
  return result;
};

const update = async (id, name) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  // console.log(result); ==> { id: 2, name: 'Garras de Wolverine' }
  return result;
};

const cutoff = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
  // console.log(result); ==> [ { affectedRows: 1 } ]
  return result;
};

const search = async (name) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name LIKE ?',
    [`%${name}%`],
  );
  // console.log(result); ==> [ { id: 1, name: 'Martelo de Thor' } ]
  return result;
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  cutoff,
  search,
};