import React from 'react';
import Container from 'react-bootstrap/Container';
import MealCard from './MealCard';

const MealsContainer = ({ meals }) => {
  const mealComponents = meals.map( meal => {
    return <MealCard key={ meal.id } meal={ meal } />
  })

  const mealsToDisplay = mealComponents.slice(0, 50);

  return (
    <Container className="meals-container">
        { mealsToDisplay }
    </Container>
  )
};

export default MealsContainer;