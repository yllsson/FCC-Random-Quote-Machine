import React from 'react';

function InnerQuoteBox({ quote, author }) {
  return (
    <article className='innerQBox'>
      <h2 className='quote' id='text'>
        {quote}
      </h2>
      <p className='author' id='author'>
        {author}
      </p>
    </article>
  );
}

export default InnerQuoteBox;
