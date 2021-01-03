import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="buttons">
        <button id="new-quote">New quote</button>
        <a
          href="https://twitter.com/intent/tweet?text=So%20inspiring%21&hashtags=randomquote"
          id="tweet-quote"
        >
          Tweet
        </a>
      </div>
    );
  }
}

export default Buttons;
