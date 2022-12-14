import React from 'react';
import MealsContainer from './MealsContainer';
import CategoryDropdown from './CategoryDropdown';

const Home = ({ meals, categories, onCategorySelect, selectedCategory }) => {
  
  return (
    <div className="main-page">
      <h5>Category</h5>
      <CategoryDropdown
        categories={ categories }
        onCategorySelect={ onCategorySelect }
        selectedCategory={ selectedCategory }
      />
      <MealsContainer meals={ meals }/>
    </div>
  )
}

export default Home;