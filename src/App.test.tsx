import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cat image', () => {
  render(<App />);
  const catImage = screen.getByAltText('Cat');
  expect(catImage).toBeInTheDocument();
  expect(catImage).toHaveAttribute('src', './assets/c2ba9d93-5267-4ac5-9f61-78c83a0d8667.jpg');
});
