import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Favorites from './Favorites';
import Categories from './Categories'

function App() {
  const [ meals, setMeals ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3001/meals')
      .then( res => res.json() )
      .then( setMeals )
  }, [])

  return (
    <div>
      <NavBar />
      <div id="main">
        <Switch>
          <Route path = "/categories">
            <Categories />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/">
            <Home meals={ meals } />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
