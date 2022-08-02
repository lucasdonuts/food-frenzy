import React from 'react';
import Card from 'react-bootstrap/Card';

const MealCard = ({ meal }) => {
  return (
    <Card border="dark" className="meal-card">
      <img 
        className="meal-image"
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
      />
      <Card.Header>{ meal.strMeal }</Card.Header>
    </Card>
  )
}

export default MealCard;