import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollRestoration from 'react-scroll-restoration';

import Home from './pages/Home';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import CharacterFull from './pages/CharacterFull';

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Switch>
        <Route path="/characters/:id" exact component={CharacterFull} />
        <Route path="/" exact component={Home} />
        <Route path="/characters" component={Characters} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </Router>
  );
}

export default App;
