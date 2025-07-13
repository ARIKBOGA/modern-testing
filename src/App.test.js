import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the App with no crash', () => {
  render(<App />);
  const appelement = screen.getByText('Jest testing with React is fun!');
  expect(appelement).toBeInTheDocument();
  expect(appelement).toHaveTextContent('Jest testing with React is fun!');
  expect(appelement).toHaveAttribute('role', 'main');
  expect(appelement).toHaveClass('App');
  expect(appelement.tagName).toBe('DIV');
})
