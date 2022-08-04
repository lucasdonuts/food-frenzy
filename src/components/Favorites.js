import React, { useState, useEffect } from 'react';
import MealsContainer from './MealsContainer';
import CategoryDropdown from './CategoryDropdown';

const Favorites = ({
    meals,
    categories,
    onCategorySelect,
    selectedCategory
  }) => {
  const [favorites, setFavorites ] = useState([]);
  
  useEffect( () => {
    setFavorites( () => {
      return meals.filter( meal => {
        return meal.favorite;
      })
    })

  }, [ meals ])

  const onRemoveFavorite = (removedMeal) => {
    const updatedFavorites = favorites.filter( meal => meal.id !== removedMeal.id )

    setFavorites(updatedFavorites)
  }

  return (
    <div>
    <h5>Category</h5>
      <CategoryDropdown
        categories={ categories }
        onCategorySelect={ onCategorySelect }
        selectedCategory={ selectedCategory }
      />
      <MealsContainer
        meals={ favorites }
        onRemoveFavorite={ onRemoveFavorite }
      />
    </div>
  )
}

export default Favorites;