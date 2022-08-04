import React from 'react';
import Container from 'react-bootstrap/Container';
import MealCard from './MealCard';

const MealsContainer = ({ meals, onRemoveFavorite, onSetCategory}) => {

  
  // add Cleanup function
  const noMealsMessage = [
    <h4>No meals to display. Add one here.</h4>
  ]

  const mealComponents = meals.map( meal => {
    return (
        <MealCard
          key={ meal.id }
          meal={ meal }
          onRemoveFavorite={ onRemoveFavorite }
          onSetCategory={ onSetCategory }
        />
    )
  })

  const mealsToDisplay = mealComponents.slice(0, 50);

  return (
    <Container className="meals-container">
        { meals.length > 0 ? mealsToDisplay : noMealsMessage }
    </Container>
  )
};

export default MealsContainer;