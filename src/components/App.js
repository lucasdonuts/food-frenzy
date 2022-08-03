import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Favorites from './Favorites';
import Categories from './Categories';
import MealPage from './MealPage';

function App() {
  const [ meals, setMeals ] = useState([]);
  // const [ favorites, setFavorites ] = useState([]);
  const [ categories, setCategories ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3001/meals')
      .then( res => res.json() )
      .then( mealData => {
        setMeals( () => [ ...mealData ] );
        // setFavorites( meals.filter( meal => {
        //   return meal.favorite
        // } ) )
      } )
      
    fetch('http://localhost:3001/categories')
      .then( res => res.json() )
      .then( setCategories )

  }, [ ])

  const onMealUpdate = (updatedMeal) => {
    setMeals( meals => meals.map( meal => {
      if( meal.id === updatedMeal.id ) {
        return updatedMeal;
      } else {
        return meal;
      }
    }))
  }

  return (
    <div>
      <NavBar />
      <div id="main">
        <Switch>
          <Route path="/meals/:id">
            <MealPage onMealUpdate={ onMealUpdate } />
          </Route>
          <Route path = "/categories">
            <Categories categories = { categories } selectedMeals = { meals }/>
          </Route>
          <Route path="/favorites">
            <Favorites meals={ meals } />
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
