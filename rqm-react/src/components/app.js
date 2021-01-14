import React, { useEffect, useState } from 'react';
import InnerQuoteBox from './quote';
import Buttons from './buttons';

function App() {
  const [allQuotes, setAllQuotes] = useState(null);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [randomIdx, setRandomIdx] = useState(Math.floor(Math.random() * 1000));
  const [theme, setTheme] = useState({
    color: ['purple', 'blue', 'red', 'green'],
  });

  const newRandomIdx = (arr) => {
    setRandomIdx(Math.floor(Math.random() * arr.length));
  };

  const changeThemeColor = () => {
    const elements = document.querySelectorAll('.themeElement');
    newRandomIdx(theme.color);
    elements.forEach((element) => {
      if (element.localName === 'a') {
        element.style.color = theme.color[randomIdx];
        element.style.border = `${theme.color[randomIdx]} 1px solid`;
      } else {
        element.style.backgroundColor = theme.color[randomIdx];
      }
    });
    document.body.style.backgroundColor = theme.color[randomIdx];
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
    changeThemeColor();
    console.log(theme);
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
