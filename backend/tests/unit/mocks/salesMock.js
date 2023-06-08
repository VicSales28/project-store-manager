const getAllMock = [
  {
    saleId: 1,
    date: '2023-05-30T16:03:56.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-05-30T16:03:56.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2023-05-30T16:03:56.000Z',
    productId: 3,
    quantity: 15,
  },
];

// getByIdMock: id = 2
const getByIdMock = {
    date: '2023-05-30T16:03:56.000Z',
    productId: 3,
    quantity: 15,
};

const insertSaleMock = [
  {
    productId: 1,
    quantity: 1,
  },
];

const insertSaleProductMock = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
  ],
};

const saleMock = [
  {
    productId: 1,
    quantity: 1,
  },
];

module.exports = {
  getAllMock,
  getByIdMock,
  insertSaleMock,
  insertSaleProductMock,
  saleMock,
};