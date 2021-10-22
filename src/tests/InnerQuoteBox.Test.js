import React from 'react';
import { render } from '@testing-library/react';
import InnerQuoteBox from '../components/InnerQuoteBox';

const props = {
  quote: `I'm an awesome coder`,
  author: 'Ylva Turner'
};

describe('InnerQuoteBox component', () => {
  it('should display quote on render', () => {
    const quoteBoxComp = render(<InnerQuoteBox {...props} />);
    const header = quoteBoxComp.getByRole('heading');
    expect(header.textContent).toBe(`"${props.quote}"`);
  });

  it('should display author on render', () => {
    const quoteBoxComp = render(<InnerQuoteBox {...props} />);
    const paragraph = quoteBoxComp.getByText(/Ylva/i);
    expect(paragraph.textContent).toBe(props.author);
  });

  it('should display "Unknown" if no author found', () => {
    const quoteBoxComp = render(<InnerQuoteBox />);
    const paragraph = quoteBoxComp.getByText(/unkn/i);
    expect(paragraph.textContent).toBe('Unknown');
  });
});
