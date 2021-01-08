import React, { useState } from 'react';
import InnerQuoteBox from './quote';
import Buttons from './buttons';

function App() {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState([]);

  let fetchQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setAuthor(data);
      });
  };

  return (
    <main id='quote-box'>
      <InnerQuoteBox quote={quote} author={author} />
      <Buttons
        setQuote={setQuote}
        setAuthor={setAuthor}
        fetchQuote={fetchQuote}
      />
    </main>
  );
}

export default App;
