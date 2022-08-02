import React from "react";
import CategoryCard from "./CategoryCard"

const Categories = ({ categories }) => {  
    const displayCategories = categories.map((category) => (
        <CategoryCard key = { category.strArea } category = { category.strArea }
        />
    ))
console.log(categories[0])

    return(
        <div>
            <h1>Categories</h1>
            <div>
                { displayCategories }
            </div>
        </div>
        
    )
}

export default Categories;