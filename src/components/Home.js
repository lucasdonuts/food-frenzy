import React from 'react';
import MealsContainer from './MealsContainer';
import CategoryDropdown from './CategoryDropdown';

const Home = ({ meals, categories, onCategorySelect, selectedCategory, onMealUpdate }) => {
  
  return (
    <div className="main-page">
      <CategoryDropdown
        categories={ categories }
        onCategorySelect={ onCategorySelect }
        selectedCategory={ selectedCategory }
      />
      <MealsContainer meals={ meals } onMealUpdate={ onMealUpdate }/>
    </div>
  )
}

export default Home;