const { expect } = require('chai');
const sinon = require('sinon');

const { validateName } = require('../../../src/middlewares/validateName');

describe('Testando middleware validateName', function () {
  afterEach(sinon.restore);

  it('Caso o campo name seja fornecido e possua tamanho maior ou igual a 5', async function () {
    const req = { body: { name: 'Manopla do Infinito' } };
    const res = {};
    const next = sinon.stub().returns();

    validateName(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Caso o campo name não seja fornecido', async function () {
    const req = { body: {} };
    const res = {};
    const next = sinon.stub().returns();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    validateName(req, res, next);

    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({ message: '"name" is required' });
  });

  it('Caso o campo name possua tamanho menor que 5', async function () {
    const req = { body: { name: 'test' } };
    const res = {};
    const next = sinon.stub().returns();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    validateName(req, res, next);

    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be.calledWith(
      { message: '"name" length must be at least 5 characters long' },
    );
  });
});