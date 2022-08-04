import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';

function CategoryDropDown({ onSetCategory, categories }){

    return(
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item>Action</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )



}
 export default CategoryDropDown;