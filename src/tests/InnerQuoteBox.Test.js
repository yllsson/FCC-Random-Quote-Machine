import React from 'react';
import { render } from '@testing-library/react';
import InnerQuoteBox from '../components/InnerQuoteBox';

const props = {
  quote: `I'm an awesome coder`,
  author: 'Ylva Turner'
};

test('should display quote on render', () => {
  const quoteBoxComp = render(<InnerQuoteBox {...props} />);
  expect(quoteBoxComp.getByRole('header').innerText).toBe(props.quote);
});
