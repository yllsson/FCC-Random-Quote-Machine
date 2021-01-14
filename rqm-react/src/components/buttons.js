import React from 'react';

function Buttons({ updateQuoteBox }) {
  let handleClick = () => {
    updateQuoteBox();
  };

  return (
    <div className='buttons'>
      <button className='themeElement' id='new-quote' onClick={handleClick}>
        New quote
      </button>
      <a
        className='themeElement'
        href='https://twitter.com/intent/tweet?text=So%20inspiring%21&hashtags=randomquote'
        id='tweet-quote'
      >
        <i className='fab fa-twitter'></i>
      </a>
    </div>
  );
}

export default Buttons;
