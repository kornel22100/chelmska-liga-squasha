import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
