import React from 'react';

function Buttons({ setQuote, setAuthor, fetchQuote }) {
  let handleClick = () => {
    setQuote(fetchQuote());
    setAuthor('Ylva Turner');
  };

  return (
    <div className='buttons'>
      <button id='new-quote' onClick={handleClick}>
        New quote
      </button>
      <a
        href='https://twitter.com/intent/tweet?text=So%20inspiring%21&hashtags=randomquote'
        id='tweet-quote'
      >
        <i class='fab fa-twitter'></i>
      </a>
    </div>
  );
}

export default Buttons;
