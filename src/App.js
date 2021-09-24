import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import CharacterFull from './pages/CharacterFull';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/characters/:id" exact component={CharacterFull} />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
