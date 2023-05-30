const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');
const { getAllMock, getByIdMock } = require('../mocks/salesMock');

describe('Testando a camada controller "./sales"', function () {
  afterEach(sinon.restore);

  it('Testando a função getAll', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAll').resolves(getAllMock);

    await salesController.getAll(req, res);
  
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWithExactly(getAllMock);
  });

  it('Testando a função getById', async function () {
    const req = { params: { id: 2 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getById').resolves(getByIdMock);

    await salesController.getById(req, res);
  
    expect(res.status).to.be.calledWith(200);
  });

  it('Testando getById passando id inexistente', async function () {
    const req = { params: { id: 2828 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getById').resolves([]);

    await salesController.getById(req, res);
  
    expect(res.status).to.be.calledWith(404);
  });
});