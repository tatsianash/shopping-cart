import { render, screen } from '@testing-library/react';
import About from '../About';

test('Renders About page correctly', () => {
  render(<About />);
  expect(screen.getByTestId('about-label').textContent).toEqual('About');
});

export {};
