import React, { useEffect, useState } from 'react';
import InnerQuoteBox from './quote';
import Buttons from './buttons';

function App() {
  const [quote, setQuote] = useState('quote');
  const [author, setAuthor] = useState('author');
  const [hasError, setError] = useState(false);

  async function fetchQuote() {
    const res = await fetch('https://type.fit/api/quotes');
    res
      .json()
      .then((data) => {
        console.log(data);
        console.log(data[1].text);
        setQuote(data[1].text);
        setAuthor(data[1].author);
      })
      .catch((err) => setError(err));
  }

  // useEffect(() => {
  //   fetchQuote();
  // });

  return (
    <main id='quote-box'>
      <InnerQuoteBox quote={quote} author={author} />
      <Buttons fetchQuote={fetchQuote} />
    </main>
  );
}

export default App;
