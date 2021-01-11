import React, { useEffect, useState } from 'react';
import InnerQuoteBox from './quote';
import Buttons from './buttons';

function App() {
  const [allQuotes, setAllQuotes] = useState([{ text: 'hellu', author: 'me' }]);
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  async function fetchQuote() {
    const res = await fetch('https://type.fit/api/quotes');
    res.json().then((data) => {
      setAllQuotes(data);
      console.log(allQuotes);
    });
  }

  let updateQuoteBox = () => {
    let randomIdx = Math.floor(Math.random() * allQuotes.length);
    setQuote(allQuotes[randomIdx].text);
    setAuthor(allQuotes[randomIdx].author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // useEffect(() => {
  //   updateQuoteBox();
  // }, []);

  return (
    <main id='quote-box'>
      <InnerQuoteBox quote={quote} author={author} />
      <Buttons updateQuoteBox={updateQuoteBox} />
    </main>
  );
}

export default App;
