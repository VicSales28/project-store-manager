const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model');
const connection = require('../../../src/models/connection');
const { getAllMock, getByIdMock } = require('../mocks/salesMock');

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
});