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
});