import React from 'react';
import MealsContainer from './MealsContainer';
import CategoryContainer from './CategoryContainer';

const Home = ({ meals, categories }) => {

  return (
    <div>
      <MealsContainer meals={ meals } />
      <CategoryContainer meals={meals}/>
    </div>
  )
}

export default Home;