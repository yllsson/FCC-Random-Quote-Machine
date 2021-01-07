import React, { useState } from 'react';
import InnerQuoteBox from './quote';
import Buttons from './buttons';

function App() {
  const [quote, setQuote] = useState('Random Quote Here');
  const [author, setAuthor] = useState('Mrs Author McAuthorson');
  return (
    <main id='quote-box'>
      <InnerQuoteBox quote={quote} author={author} />
      <Buttons quote={quote} setQuote={setQuote} />
    </main>
  );
}

export default App;
