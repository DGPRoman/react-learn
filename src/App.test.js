import { render, screen } from '@testing-library/react';
import RopelApp from './App';

test('renders learn react link', () => {
  render(<RopelApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
