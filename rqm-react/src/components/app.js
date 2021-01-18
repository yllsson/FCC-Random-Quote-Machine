import React, { useEffect, useState, useRef } from 'react';
import InnerQuoteBox from './quote';
import Buttons from './buttons';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

function App() {
  const [allQuotes, setAllQuotes] = useState(null);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [randomIdx, setRandomIdx] = useState(Math.floor(Math.random() * 1000));
  const [themeIdx, setThemeIdx] = useState(Math.floor(Math.random() * 25));
  const prevThemeIdx = usePrevious(themeIdx);
  const [theme] = useState({
    color: [
      '#EF6F6C',
      '#465775',
      '#56E39F',
      '#59C9A5',
      '#5B6C5D',
      '#E3170A',
      '#F7B32B',
      '#2D1E2F',
      '#62929E',
      '#C6C5B9',
      '#CE7B91',
      '#031926',
      '#90BE6D',
      '#EA9010',
      '#63264A',
      '#7161EF',
      '#B79CED',
      '#49111C',
      '#BA5A31',
      '#04A777',
      '#30011E',
      '#B68F40',
      '#086375',
      '#3C1642',
      '#454ADE',
    ],
  });

  const newRandomIdx = (arr) => {
    if (arr === theme.color) {
      setThemeIdx(Math.floor(Math.random() * arr.length));
    } else {
      setRandomIdx(Math.floor(Math.random() * arr.length));
    }
  };

  const changeThemeColor = () => {
    const elements = document.querySelectorAll('.themeElement');
    newRandomIdx(theme.color);

    if (prevThemeIdx === themeIdx) {
      let index = themeIdx - 1;
      if (index < 0) {
        index = theme.color.length - 1;
      }

      elements.forEach((element) => {
        element.style.backgroundColor = theme.color[index];
      });
      document.body.style.backgroundColor = theme.color[index];
    } else {
      elements.forEach((element) => {
        element.style.backgroundColor = theme.color[themeIdx];
      });
      document.body.style.backgroundColor = theme.color[themeIdx];
    }
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

  const updateQuoteBox = () => {
    newRandomIdx(allQuotes);
    setQuote(allQuotes[randomIdx].text);
    setAuthor(allQuotes[randomIdx].author);
    changeThemeColor();
  };

  useEffect(() => {
    fetchQuote();
    changeThemeColor();
  }, []);

  return (
    <main id='quote-box'>
      {allQuotes && <InnerQuoteBox quote={quote} author={author} />}
      <Buttons quote={quote} updateQuoteBox={updateQuoteBox} />
    </main>
  );
}

export default App;
