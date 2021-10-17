import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Buttons from '../components/Buttons';

test('should call updateQuoteBox when clicked', () => {
  const updateQuoteBox = jest.fn();
  render(<Buttons onClick={updateQuoteBox} />);
  fireEvent.click(screen.getByText(/New quote/i));
  expect(updateQuoteBox).toHaveBeenCalled();
});
