import { render, screen, fireEvent } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';

import Product from '../pages/product';
import { ProductType } from '../types/Product';

jest.mock('../lib/get-product', () => ({
  props: {
    product: {},
    error: '',
  },
}));

const mockedProduct = {
  img_url: '/',
  name: 'name',
  description: 'nice product',
  price: 1234,
} as unknown as ProductType;

test('should be able to increase and decrease product quantity', async () => {
  render(
    <Product product={mockedProduct} error={null} />,
  );

  // Original selectors
  // const increaseQuantity = screen.getByText('+');
  // const decreaseQuantity = screen.getByText('-');
  // const currentQuantity = screen.getByTitle('Current quantity');

  const increaseQuantity = screen.getByRole('button', { name: 'Increase quantity' });
  const decreaseQuantity = screen.getByRole('button', { name: 'Decrease quantity' });

  const currentQuantity = screen.getByRole('heading', { name: 'Current quantity' });

  expect(currentQuantity).toHaveTextContent('1');
  expect(decreaseQuantity).toBeDisabled();

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent('2');

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent('1');
});

test('should be able to add items to the basket', async () => {
  render(
    <Product product={mockedProduct} error={null} />,
  );

  // const increaseQuantity = screen.getByText('+');
  // const currentQuantity = screen.getByTitle('Current quantity');

  const increaseQuantity = screen.getByRole('button', { name: 'Increase quantity' });
  const currentQuantity = screen.getByRole('heading', { name: 'Current quantity' });

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent('4');

  // const addToBasketElement = screen.getByText('Add to basket');
  const addToBasketElement = screen.getByRole('button', { name: 'Add to basket' });

  fireEvent.click(addToBasketElement);

  // const basketItems = screen.getByTitle('Basket items');
  const basketItems = screen.getByRole('button', { name: 'Basket items 4' });

  expect(basketItems).toHaveTextContent('4');
});

test('should reset quantity count on submit', async () => {
  const user = userEvent.setup();

  render(
    <Product product={mockedProduct} error={null} />,
  );

  const currentQuantity = screen.getByRole('heading', { name: 'Current quantity' });

  await user.click(screen.getByRole('button', { name: 'Increase quantity' }));

  expect(currentQuantity).toHaveTextContent('2');

  const addToBasketButton = screen.getByRole('button', { name: 'Add to basket' });
  await user.click(addToBasketButton);

  expect(currentQuantity).toHaveTextContent('1');
});

test('should not be able to reduce quantity to less than 1', async () => {
  const user = userEvent.setup();
  render(
    <Product product={mockedProduct} error={null} />,
  );

  const currentQuantity = screen.getByRole('heading', { name: 'Current quantity' });
  const decreaseQuantityButton = screen.getByRole('button', { name: 'Decrease quantity' });

  expect(decreaseQuantityButton).toBeDisabled();

  expect(currentQuantity).toHaveTextContent('1');

  user.click(decreaseQuantityButton);

  expect(currentQuantity).toHaveTextContent('1');
});
