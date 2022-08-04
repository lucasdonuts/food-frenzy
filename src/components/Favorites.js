import React, { useState, useEffect } from 'react';
import MealsContainer from './MealsContainer';
import CategoryDropdown from './CategoryDropdown';

const Favorites = ({
    meals,
    categories,
    onCategorySelect,
    selectedCategory,
    onMealUpdate
  }) => {
  const [favorites, setFavorites ] = useState([]);
  const [ isFavorite, setIsFavorite ] = useState(meals.favorite);
  
  useEffect( () => {
    setFavorites( () => {
      return meals.filter( meal => {
        return meal.favorite;
      })
    })

  }, [ meals ])

  const onRemoveFavorite = (removedMeal) => {
    console.log("removed")
    fetch( `http://localhost:3001/meals/${removedMeal.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite: !isFavorite
      })
    } )
       .then( res => res.json() )
       .then( () => {
        setFavorites(favorites.filter( meal => meal.id !== removedMeal.id ))
       })
  }

  return (
    <div>
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