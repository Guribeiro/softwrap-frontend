import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalSyle } from './styles/global';

import Routes from './routes';

const App:React.FC = () => (
  <Router>
    <Routes />
    <GlobalSyle />
  </Router>
);

export default App;
