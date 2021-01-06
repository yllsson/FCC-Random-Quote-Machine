import React from 'react';
import InnerQuoteBox from './quote';
import Buttons from './buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id='quote-box'>
        <InnerQuoteBox />
        <Buttons />
      </main>
    );
  }
}

export default App;
