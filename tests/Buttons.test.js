import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Buttons from '../components/Buttons';

test('should call updateQuoteBox when clicked', () => {
  const updateQuoteBox = jest.fn();
  const buttons = render(<Buttons updateQuoteBox={updateQuoteBox} />);
  fireEvent.click(buttons.getByText(/New quote/i));
  expect(updateQuoteBox).toHaveBeenCalled();
});
