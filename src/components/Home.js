import React from 'react';
import MealsContainer from './MealsContainer';

const Home = ({ meals }) => {

  return (
    <div>
      <h1>Home Page</h1>
      <MealsContainer meals={ meals } />
    </div>
  )
}

export default Home;