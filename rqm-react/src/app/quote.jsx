import React from 'react';

class InnerQuoteBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="innerQBox">
        <h2 className="quote" id="text">
          Inspiring Random Quote
        </h2>
        <p className="author" id="author">
          Mr Author McAuthorson
        </p>
      </article>
    );
  }
}

export default InnerQuoteBox;
