const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.service');
const { getAllMock, getByIdMock } = require('../mocks/salesMock');

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
});