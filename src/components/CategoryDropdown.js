import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

function CategoryDropDown({ selectedCategory, onCategorySelect, categories }){

  const dropdownOptions = categories.map( cat => {
    const category = cat.category;

    return (
      <option key={ category } value={ category }>{ category }</option>
    )
  })

    return(
      <select
        id="category-dropdown"
        value={ selectedCategory }
        onChange={ e => onCategorySelect( e.target.value ) }
      >
        <option value="All">All</option>
        { dropdownOptions }
      </select>
    )



}
  export default CategoryDropDown;