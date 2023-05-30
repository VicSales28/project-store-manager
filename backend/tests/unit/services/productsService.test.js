const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const { getAllMock, getByIdMock, insertMock } = require('../mocks/productsMock');

describe('Testando a camada services "./product"', function () {
  afterEach(sinon.restore);

  it('Testando a função getAll', async function () {
    sinon.stub(productsModel, 'getAll').resolves([getAllMock]);

    const result = await productsService.getAll();

    expect(result).to.be.deep.equal([getAllMock]);
  });

  it('Testando a função getById', async function () {
    sinon.stub(productsModel, 'getById').resolves(getAllMock[0]);

    const result = await productsService.getById(1);

    expect(result).to.be.deep.equal({ type: null, message: getByIdMock });
  });

  it('Testando getById passando id inexistente', async function () {
    sinon.stub(productsModel, 'getById').resolves(undefined);

    const result = await productsService.getById(2828);

    expect(result).to.be.deep.equal({ type: 404, message: 'Product not found' });
  });

  it('Testando a função insert', async function () {
    sinon.stub(productsModel, 'insert').resolves(insertMock);

    const { type } = await productsService.insert('Manopla do Infinito');

    expect(type).to.be.deep.equal(201);
  });
});