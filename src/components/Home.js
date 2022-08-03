import React from 'react';
import MealsContainer from './MealsContainer';
import Categories from './Categories';

const Home = ({ meals, categories }) => {

  return (
    <div>
      <Categories meals={meals} categories={ categories }/>
      <MealsContainer meals={ meals } />
    </div>
  )
}

export default Home;