import { render, screen } from '@testing-library/react';
import CartItem from '../CartItem';

beforeAll(() => {
  jest.mock('../../data/items.json', () => [
    {
      id: 1,
      name: 'Book',
      price: 10.99,
      imgUrl: '/images/book.jpg',
    },
    {
      id: 2,
      name: 'Computer',
      price: 1199,
      imgUrl: '/images/computer.jpg',
    },
  ]);
});

test('Renders Card Item name correctly', () => {
  const item = { id: 1, quantity: 2 };
  render(<CartItem {...item} />);
  const name = screen.getByTestId('name').textContent;
  expect(name).toContain('Book');
  expect(name).toContain('×2');
  const price = screen.getByTestId('price').textContent;
  expect(price).toEqual('$10.99');
  const amount = screen.getByTestId('amount').textContent;
  expect(amount).toContain('$21.98');
});

export {};
