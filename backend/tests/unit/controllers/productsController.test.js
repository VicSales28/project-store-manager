const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const { getAllMock, getByIdMock } = require('../mocks/productsMock');

describe('Testando a camada controller "./product"', function () {
  afterEach(sinon.restore);

  it('Testando a função getAll', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAll').resolves(getAllMock);

    await productsController.getAll(req, res);
  
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWithExactly(getAllMock);
  });

  it('Testando a função getById', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getById').resolves(getByIdMock);

    await productsController.getById(req, res);
  
    expect(res.status).to.be.calledWith(200);
  });

  it('Testando getById passando id inexistente', async function () {
    const req = { params: { id: 2828 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getById').resolves({ type: 404 });

    await productsController.getById(req, res);
  
    expect(res.status).to.be.calledWith(404);
  });
});