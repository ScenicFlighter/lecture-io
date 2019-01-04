import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import {Main} from './components';

import './styles/App.scss';

const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);

export default App;
