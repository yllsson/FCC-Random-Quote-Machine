import React, { useEffect, useState } from 'react';
import InnerQuoteBox from './quote';
import Buttons from './buttons';

function App() {
  const [allQuotes, setAllQuotes] = useState(null);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [randomIdx, setRandomIdx] = useState(0);

  const newRandomIdx = (arr) => {
    setRandomIdx(Math.floor(Math.random() * arr.length));
  };

  async function fetchQuote() {
    const res = await fetch('https://type.fit/api/quotes');
    res.json().then((data) => {
      setAllQuotes(data);
      newRandomIdx(data);
      setQuote(data[randomIdx].text);
      setAuthor(data[randomIdx].author);
    });
  }

  let updateQuoteBox = () => {
    newRandomIdx(allQuotes);
    setQuote(allQuotes[randomIdx].text);
    setAuthor(allQuotes[randomIdx].author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main id='quote-box'>
      {allQuotes && <InnerQuoteBox quote={quote} author={author} />}
      <Buttons updateQuoteBox={updateQuoteBox} />
    </main>
  );
}

export default App;
