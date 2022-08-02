import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => {

  return (
    <Card
      border="dark"
      className="meal-card"
    >
      <Card.Img
        className="meal-card-image"
        variant="top"
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
      />
      <Card.Body>
        <Card.Subtitle>{ meal.strMeal }</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default MealCard;