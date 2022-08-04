import React, { useState, useEffect } from 'react';
import MealsContainer from './MealsContainer';

const Categories = ({ meals, categories }) => {
  const [ selectedCategory, setSelectedCategory ] = useState('All');

  const onCategorySelect = (e) => {
    setSelectedCategory(e.target.value)
  }

  

  // JSON filter pathname and add category buttons

  // const categorizedMeals = meals.filter( meal => meal.strArea === selectedCategory.strArea )

  return(
    <div>
      {console.log(categories)}
      <MealsContainer meals = { selectedCategory } onCategorySelect = { onCategorySelect }/>
    </div>
  )

}

export default Categories;