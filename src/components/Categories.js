import React from 'react';


function Categories() {

    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(resp => resp.json())
    .then(catData => console.log(catData))
}

export default Categories;