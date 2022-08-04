import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Favorites from './Favorites';
import MealPage from './MealPage';
import AddRecipe from './AddRecipe';
import Categories from './Categories';

function App() {
  const [ meals, setMeals ] = useState([]);
  const [ categories, setCategories ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3001/meals')
      .then( res => res.json() )
      .then( mealData => {
        setMeals( () => [ ...mealData ] );
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

  const addMeal = (addedMeal) => {
    setMeals([addedMeal, ...meals])
  }

  return (
    <div>
      <NavBar />
      <div id="main">
        <Switch>
          <Route path="/meals/:id">
            <MealPage onMealUpdate={ onMealUpdate } />
          </Route>
          <Route path = "/addrecipe">
            <AddRecipe addMeal = { addMeal }/>
          </Route>
          <Route path="/favorites">
            <Favorites meals={ meals } />
          </Route>
          <Route exact path="/">
            <Home meals={ meals } categories={ categories } />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
