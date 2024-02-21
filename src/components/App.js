import React, { useEffect, useState, useRef } from 'react';
import InnerQuoteBox from './InnerQuoteBox';
import Buttons from './Buttons';

// get previous state
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

function App() {
  // state
  const [allQuotes, setAllQuotes] = useState(null);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
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
      '#454ADE'
    ]
  });
  const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  const [randomIdx, setRandomIdx] = useState(Math.floor(Math.random() * 1000));
  const [themeIdx, setThemeIdx] = useState(Math.floor(Math.random() * 25));
  const prevThemeIdx = usePrevious(themeIdx);

  // get new random index
  const newRandomIdx = (arr) => {
    if (arr === theme.color) {
      setThemeIdx(Math.floor(Math.random() * arr.length));
    } else {
      setRandomIdx(Math.floor(Math.random() * arr.length));
    }
  };

  // fetch the quotes
  const fetchQuote = async () => {
    let res = await fetch('https://type.fit/api/quotes');
    try {
      if (!res.ok) {
        throw Error('Unable to fetch the data');
      }
      let data = await res.json();
      setAllQuotes(data);
      newRandomIdx(data);
      setQuote(data[randomIdx].text);
      setAuthor(data[randomIdx].author);
      setIsPending(false);
      // setError(null);
    } catch (error) {
      setIsPending(false);
      // setError(error.message);
    }
  };

  // change the theme colour
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

  // subsequent updates of the quote box
  const updateQuoteBox = () => {
    newRandomIdx(allQuotes);
    setQuote(allQuotes[randomIdx].text);
    setAuthor(allQuotes[randomIdx].author);
    changeThemeColor();
  };

  // functions to use on first render
  useEffect(() => {
    fetchQuote();
    changeThemeColor();
    updateQuoteBox();
  }, []);

  return (
    <main id='quote-box'>
      {/* {error && <h2 className='error'>{`Error: ${error}`}</h2>} */}
      {isPending && <h2>Grabbing Quote...</h2>}
      {allQuotes && <InnerQuoteBox quote={quote} author={author} />}
      <Buttons quote={quote} updateQuoteBox={updateQuoteBox} />
    </main>
  );
}

export default App;
