import React from 'react';

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <img 
        className="meal-image"
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
      />
      <h4>{ meal.strMeal }</h4>
    </div>
  )
}

export default MealCard;