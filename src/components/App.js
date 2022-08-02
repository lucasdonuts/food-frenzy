import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Favorites from './Favorites';
import Categories from './Categories';
import MealPage from './MealPage';

function App() {
  const [ meals, setMeals ] = useState([]);
  const [ categories, setCategories ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3001/meals')
      .then( res => res.json() )
      .then( setMeals )
  }, [])

  useEffect( () => {
    fetch('http://localhost:3001/categories')
      .then( res => res.json() )
      .then( setCategories )
  }, [])

  return (
    <div>
      <NavBar />
      <div id="main">
        <Switch>
          <Route path="/meals/:id">
            <MealPage />
          </Route>
          <Route path = "/categories">
            <Categories categories = { categories }/>
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
