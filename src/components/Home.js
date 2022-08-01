import React from 'react';
import MealCard from './MealCard';

const Home = ({ meals }) => {
  const mealComponents = meals.map( meal => {
    return <MealCard key={ meal.id } meal={ meal } />
  })

  const mealsToDisplay = mealComponents.slice(0, 10);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="meals-container">
        { mealsToDisplay }
      </div>
    </div>
  )
}

export default Home;