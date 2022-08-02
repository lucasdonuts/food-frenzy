import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import MealCard from './MealCard';

const MealsContainer = ({ meals }) => {
  const mealComponents = meals.map( meal => {
    return (
      <Link key={ meal.id } to={ `/meals/${meal.id}` } >
        <MealCard meal={ meal } />
      </Link>
    )
  })

  const mealsToDisplay = mealComponents.slice(0, 50);

  return (
    <Container className="meals-container">
        { mealsToDisplay }
    </Container>
  )
};

export default MealsContainer;