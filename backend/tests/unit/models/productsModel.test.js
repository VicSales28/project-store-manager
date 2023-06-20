const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const { getAllMock, insertMock, updateMock } = require('../mocks/productsMock');

describe('Testando a camada model "./product"', function () {
  afterEach(sinon.restore);

  it('Testando a função getAll', async function () {
    sinon.stub(connection, 'execute').resolves([getAllMock]);

    const result = await productsModel.getAll();

    expect(result).to.be.deep.equal(getAllMock);
  });

  it('Testando a função getById', async function () {
    sinon.stub(connection, 'execute').resolves([[getAllMock[0]]]);

    const result = await productsModel.getById(1);

    expect(result).to.be.deep.equal(getAllMock[0]);
  });

  it('Testando a função insert', async function () {
    sinon.stub(connection, 'execute').resolves([[insertMock[0]]]);

    const result = await productsModel.insert(insertMock.name);

    expect(result).to.be.deep.equal(insertMock);
  });

  it('Testando a função update', async function () {
    sinon.stub(connection, 'execute').resolves([updateMock]);

    const result = await productsModel.update([updateMock]);

    expect(result).to.be.deep.equal(updateMock);
  });

  it('Testando a função cut off', async function () {
    const executeStub = sinon.stub(connection, 'execute');

    executeStub.resolves([[{ affectedRows: 1 }]]);

    const result = await productsModel.cutoff(1);

    expect(executeStub.callCount).to.equal(1);

    expect(executeStub.firstCall.args[0]).to
      .equal('DELETE FROM StoreManager.products WHERE id = ?');

    expect(executeStub.firstCall.args[1]).to.deep.equal([1]);

    expect(result).to.deep.equal([{ affectedRows: 1 }]);
  });
});