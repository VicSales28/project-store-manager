const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.service');
const { 
  getAllMock, 
  getByIdMock, 
  insertSaleMock, 
  insertSaleProductMock,
  saleMock,
} = require('../mocks/salesMock');

describe('Testando a camada services "./sales"', function () {
  afterEach(sinon.restore);

  it('Testando a função getAll', async function () {
    sinon.stub(salesModel, 'getAll').resolves([getAllMock]);

    const result = await salesService.getAll();

    expect(result).to.be.deep.equal([getAllMock]);
  });

  it('Testando a função getById', async function () {
    sinon.stub(salesModel, 'getById').resolves([getByIdMock]);

    const result = await salesService.getById(2);

    expect(result).to.be.deep.equal([getByIdMock]);
  });

  it('Testando getById passando id inexistente', async function () {
    sinon.stub(salesModel, 'getById').resolves([]);

    const result = await salesService.getById(2828);

    return expect(result).to.be.an('array').that.is.empty;
  });

  it('Testando a função insert', async function () {
    sinon.stub(salesModel, 'insertSale').resolves(insertSaleMock);
    sinon.stub(salesModel, 'insertSaleProduct').resolves(insertSaleProductMock);

    const { message: { itemsSold } } = await salesService.insert(saleMock);

    expect(itemsSold).to.be.deep.equal(saleMock);
  });

  it('Testando a função cut off', async function () {
    sinon.stub(salesModel, 'cutoff').resolves();

    const result = await salesService.cutoff(1);

    expect(result).to.be.deep.equal({ type: 204, data: null });
  });

  it('Testando a função cut off passando id inexistente', async function () {
    sinon.stub(salesModel, 'cutoff').resolves(undefined);

    const result = await salesService.cutoff(28);

    expect(result).to.be.deep.equal({ type: 404, data: { message: 'Sale not found' } });
  });
});