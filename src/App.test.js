import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('siva-test');
  expect(linkElement).toBeInTheDocument();
});

test('url is correct or not', () => {
  render(<App />);
  const linkElement = screen.getByTestId('siva-test');
  expect(linkElement.href).toContain('siva.com');
});
