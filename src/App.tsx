import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Blocks/Main/Main';

import './App.scss';
import Users from './components/Blocks/Users/Users';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__wrapper">
        <Main />
        <Users />
      </div>
    </div>
  );
}

export default App;
