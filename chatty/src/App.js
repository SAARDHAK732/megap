import React from 'react';
import { Approuter } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Approuter />
    </Router>
  );
};

export default App;
