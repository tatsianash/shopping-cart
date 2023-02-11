import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('Renders Home page correctly', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1 }).textContent).toEqual('Home');
});

export {};
