import getProduct from '../lib/get-product';

const queryMock = jest.fn();

jest.mock('../lib/apollo-client', () => (
  { query: () => queryMock() }
));

describe('getProduct', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('returns a product response when query is successful', async () => {
    queryMock.mockImplementation(() => ({ data: { Product: { id: 1 } } }));

    const result = await getProduct('1');

    expect(result).toEqual({
      props: {
        error: null,
        product: { id: 1 },
      },
    });
  });

  test('returns an error response when query is not successful', async () => {
    const error = new Error('boom');

    queryMock.mockImplementation(() => { throw error; });

    const result = await getProduct('1');

    expect(result).toEqual({
      props: {
        error,
        product: null,
      },
    });
  });
});
