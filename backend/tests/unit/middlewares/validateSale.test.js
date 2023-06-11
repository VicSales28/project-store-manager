const { expect } = require('chai');
const sinon = require('sinon');

const { validateSale } = require('../../../src/middlewares/validateSale');

describe('Testando middleware validateSale', function () {
  afterEach(sinon.restore);

  it('Caso o campo productId não seja fornecido', async function () {
    const req = { body: [{ quantity: 1 }] };
    const res = {};
    const next = sinon.stub().returns();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    validateSale(req, res, next);

    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({ message: '"productId" is required' });
  });

  it('Caso o campo quantity não seja fornecido', async function () {
    const req = { body: [{ productId: 1 }] };
    const res = {};
    const next = sinon.stub().returns();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    validateSale(req, res, next);

    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({ message: '"quantity" is required' });
  });

  it('Caso o campo quantity seja menor ou igual a zero', async function () {
    const req = { body: [{ productId: 1, quantity: 0 }] };
    const res = {};
    const next = sinon.stub().returns();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    validateSale(req, res, next);

    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be.calledWith(
      { message: '"quantity" must be greater than or equal to 1' },
    );
  });

  it('Caso o campo productId fornecido seja inexistente', async function () {
    const req = { body: [{ productId: 99, quantity: 1 }] };
    const res = {};
    const next = sinon.stub().returns();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await validateSale(req, res, next);
    
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be.calledWith({ message: 'Product not found' });
  });
});