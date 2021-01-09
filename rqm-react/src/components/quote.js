import React from 'react';

// const Quote = ({ text, author }) => {
//   return (
//     <span>
//       <strong>{text}</strong> &nbsp; <span>{author}</span>
//     </span>
//   );
// };

function InnerQuoteBox({ quote, author }) {
  return (
    <article className='innerQBox'>
      <h2 className='quote' id='text'>
        {JSON.stringify(quote)}
      </h2>
      <p className='author' id='author'>
        {JSON.stringify(author)}
      </p>
    </article>
  );
}

export default InnerQuoteBox;
