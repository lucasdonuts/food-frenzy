import React from "react";

const Categories = () => {

    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then(resp => resp.json())
    .then(catData => console.log(catData))

    return(
        <div>
            <h1>Categories</h1>
        </div>
        
    )
    

}

export default Categories;