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

  return (
    <div>
      <MealsContainer meals={ favorites } />
    </div>
  )
}

export default Favorites;