import React, { useState, useEffect } from 'react';
import MealsContainer from './MealsContainer';
import CategoryDropDown from './CategoryDropDown';

const Categories = ({ meals }) => {
    const [ selectedCategory, setSelectedCategory ] = useState([]);

    useEffect( () => {
        setSelectedCategory( () => {
          return meals.filter( meal => {
            return meal.strArea;
          })
        })
      }, [ meals ])

    const onSetCategory = (category) => {
        const categorizedMeals = selectedCategory.filter( meal => meal.strArea !== category.strArea )

        setSelectedCategory(categorizedMeals)
      }

      return(
        <div>
            <CategoryDropDown onSetCategory = {onSetCategory}/>
        </div>
      )

}

export default Categories;