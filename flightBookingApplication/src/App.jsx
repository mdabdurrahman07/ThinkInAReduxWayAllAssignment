import React from 'react';
import Header from './components/Header/Header';
import InputCard from './components/InputCard/InputCard';
import OutputCard from './components/OutputCard/OutputCard';

const App = () => {
  return (
    <main>
      {/* header section */}
      <Header/>
      {/* Input Section */}
      <InputCard/>
      {/* Output Section */}
      <OutputCard/>
    </main>
  );
};

export default App;
