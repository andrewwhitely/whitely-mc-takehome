import { render, screen } from '@testing-library/react';

import Feed from './components/Feed';

test('check feed is rendered', () => {
  render(<Feed />);
  const titleElement = screen.getByText(/Comment Form/i);
  expect(titleElement).toBeInTheDocument();
});
