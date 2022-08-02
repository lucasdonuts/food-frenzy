import React, { useState } from "react";
import CategoryCard from "./CategoryCard"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';

const Categories = ({ categories, selectedMeals}) => { 
    
    //show all selected
    const [ showAll, setShowAll ] = useState(true)
    const setShowMeals = () => {
        setShowAll(!showAll);
    }

    // initially display all meals
    const uncategorizedMeals = selectedMeals.map((meal) => (
          <Link to={ `/meals/${meal.id}` } >
            <CategoryCard key={ meal.id } meal={ meal } image = {meal.strMealThumb}/>
          </Link>
    ))

    // display the buttons
    const displayCategories = categories.map((category) => (
        <CategoryCard key = { category.strArea } category = { category.strArea }
        />
    ))

    // display the meal with show all

    return(
        <div>
            <h1>Categories</h1>
            <Button>Show all</Button>         
            <Container>
                { displayCategories } 
            </Container>
            <Container>
                { uncategorizedMeals }
            </Container>
        </div>
        
    )
}

export default Categories;