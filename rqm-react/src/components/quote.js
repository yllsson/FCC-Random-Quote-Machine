import React from 'react';

function InnerQuoteBox({ quote, author }) {
  return (
    <article className='innerQBox'>
      {quote.map((item) => {
        return (
          <h2 className='quote' id='text'>
            {item.text}
          </h2>
        );
      })}
      {quote.map((item) => {
        return (
          <p className='author' id='author'>
            {item.author}
          </p>
        );
      })}
    </article>
  );
}

export default InnerQuoteBox;
