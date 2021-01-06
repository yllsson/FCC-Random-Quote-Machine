import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // add in function to fetch quotes from quote API on press of new quote button see --> https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373 and https://type.fit/api/quotes
  // fetchQuote() {
  //   fetch("https://type.fit/api/quotes")
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(data) {
  //       console.log(data);
  //     });
  // }

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
