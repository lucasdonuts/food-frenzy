import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Favorites from './Favorites';
import MealPage from './MealPage';
import AddRecipe from './AddRecipe';

function App() {
  const [ meals, setMeals ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ selectedCategory, setSelectedCategory ] = useState('All');

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
  
  const onCategorySelect = (category) => {
    setSelectedCategory(category)
  }

  const mealsToDisplay = meals.filter( meal => {
    return selectedCategory === 'All' ? true : meal.strArea === selectedCategory
  })

  return (
    <div>
      <NavBar />
      <div id="main">
        <Switch>
          <Route path="/meals/:id">
            <MealPage onMealUpdate={ onMealUpdate } />
          </Route>
          <Route path = "/addrecipe">
            <AddRecipe
              addMeal = { addMeal }
              categories={ categories }
            />
          </Route>
          <Route path="/favorites">
            <Favorites
              meals={ mealsToDisplay }
              categories={ categories }
              selectedCategory={ selectedCategory }
              onCategorySelect={ onCategorySelect }
              onMealUpdate={ onMealUpdate }
            />
          </Route>
          <Route exact path="/">
            <Home
              meals={ mealsToDisplay }
              categories={ categories }
              selectedCategory={ selectedCategory }
              onCategorySelect={ onCategorySelect }
              onMealUpdate={ onMealUpdate }
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
