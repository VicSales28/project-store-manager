const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model');
const connection = require('../../../src/models/connection');
const { 
  getAllMock, 
  getByIdMock, 
  insertSaleMock, 
  insertSaleProductMock,
} = require('../mocks/salesMock');

describe('Testando a camada model "./sales"', function () {
  afterEach(sinon.restore);

  it('Testando a função getAll', async function () {
    sinon.stub(connection, 'execute').resolves([getAllMock]);

    const result = await salesModel.getAll();

    expect(result).to.be.deep.equal(getAllMock);
  });

  it('Testando a função getById', async function () {
    sinon.stub(connection, 'execute').resolves([getByIdMock]);

    const result = await salesModel.getById(2);

    expect(result).to.be.deep.equal(getByIdMock);
  });

  it('Testando a função insertSale', async function () {
    sinon.stub(connection, 'execute').resolves([insertSaleMock]);

    const result = await salesModel.insertSale(insertSaleMock);

    expect(result).to.be.deep.equal(insertSaleMock);
  });

  it('Testando a função insertSaleProduct', async function () {
    sinon.stub(connection, 'execute').resolves([insertSaleProductMock]);

    const result = await salesModel.insertSaleProduct(insertSaleProductMock);

    expect(result).to.be.deep.equal(insertSaleProductMock);
  });

  it('Testando a função cut off', async function () {
    const id = 1;
    const query0 = 'DELETE FROM StoreManager.sales WHERE  id = ?';
    const query1 = 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?';
    sinon.stub(connection, 'execute').resolves();
    await salesModel.cutoff(id);
    expect(connection.execute.firstCall.args[0]).to.equal(query0);
    expect(connection.execute.firstCall.args[1]).to.deep.equal([id]);
    expect(connection.execute.secondCall.args[0]).to.equal(query1);
    expect(connection.execute.secondCall.args[1]).to.deep.equal([id]);
  });
});