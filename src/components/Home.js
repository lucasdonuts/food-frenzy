import React from 'react';
import MealsContainer from './MealsContainer';
import CategoryContainer from './CategoryContainer';

const Home = ({ meals }) => {
  console.log(meals)
  return (
    <div>
      <MealsContainer meals={ meals } />
    </div>
  )
}

export default Home;