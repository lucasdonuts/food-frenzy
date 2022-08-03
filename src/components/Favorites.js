import React, { useState, useEffect } from 'react';
import MealsContainer from './MealsContainer';

const Favorites = ({ meals }) => {
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
      <MealsContainer meals={ favorites } onRemoveFavorite={ onRemoveFavorite } />
    </div>
  )
}

export default Favorites;