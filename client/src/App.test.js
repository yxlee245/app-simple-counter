import React from 'react';
import { render } from '@testing-library/react';
import Count from './components/Count';

test('renders component Count', () => {
  const { getByText } = render(<Count />);
  const linkElement = getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});
