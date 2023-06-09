const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const { getAllMock, getByIdMock, insertMock, updateMock } = require('../mocks/productsMock');

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

    const { message } = await productsService.insert('Manopla do Infinito');

    expect(message.name).to.be.deep.equal('Manopla do Infinito');
  });

  it('Testando a função update', async function () {
    sinon.stub(productsModel, 'update').resolves(updateMock);

    const { data } = await productsService.update(2, 'Garras de Wolverine');

    expect(data.name).to.be.deep.equal('Garras de Wolverine');
  });

  it('Testando a função update passando id inexistente', async function () {
    sinon.stub(productsModel, 'update').resolves(undefined);

    const result = await productsService.update(28, 'Armadura do Homem de Ferro');

    expect(result).to.be.deep.equal({ type: 404, data: { message: 'Product not found' } });
  });
});