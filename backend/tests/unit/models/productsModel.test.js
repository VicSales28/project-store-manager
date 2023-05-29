const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const { getAllMock } = require('../mocks/productsModelMock');

describe('Testando a camada model "./product"', function () {
  afterEach(sinon.restore);

  it('Testando a função getAll', async function () {
    sinon.stub(connection, 'execute').resolves([getAllMock]);

    const result = await productsModel.getAllMock();

    expect(result).to.be.deep.equal(getAllMock);
  });

  it('Testando a função getById', async function () {
    sinon.stub(connection, 'execute').resolves([[getAllMock[0]]]);

    const result = await productsModel.getById(1);

    expect(result).to.be.deep.equal(getAllMock[0]);
  });
});