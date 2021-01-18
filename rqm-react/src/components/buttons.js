import React from 'react';

function Buttons({ quote, updateQuoteBox }) {
  return (
    <div className='buttons'>
      <button
        className='themeElement'
        id='new-quote'
        target='_blank'
        onClick={updateQuoteBox}
      >
        New quote
      </button>
      <a
        className='themeElement'
        href={`https://twitter.com/intent/tweet?text=So%20inspiring%21${` "${quote}"`}&hashtags=randomQuoteMachine%2C100DaysOfCode`}
        id='tweet-quote'
      >
        <i className='fab fa-twitter'></i>
      </a>
    </div>
  );
}

export default Buttons;
