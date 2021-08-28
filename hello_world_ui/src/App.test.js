import { render, screen } from '@testing-library/react';
import App from './App';

test('renders missing status', () => {
  render(<App />);
  const linkElement = screen.getByText(/Not sure where I am/i);
  expect(linkElement).toBeInTheDocument();
});
