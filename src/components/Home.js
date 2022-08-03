import React from 'react';
import MealsContainer from './MealsContainer';

const Home = ({ meals }) => {

  return (
    <div>
      <MealsContainer meals={ meals } />
    </div>
  )
}

export default Home;