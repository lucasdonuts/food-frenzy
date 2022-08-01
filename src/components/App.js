import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Favorites from './Favorites';
import Categories from './Categories'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path = "/categories">
          <Categories />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
