import React from 'react';
import { useDispatch } from 'react-redux';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  // const dispatch = useDispatch();

  render() {
    return (
      <div className='buttons'>
        <button onclick={this.fetchQuote()} id='new-quote'>
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
}

export default Buttons;
