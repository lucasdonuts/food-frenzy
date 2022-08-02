import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



const CategoryCard = ({ category, meal }) => {

    const changeCategory = () => {
        console.log(category)
    }

    return(
        <Button onClick = { changeCategory } className = "category">{ category }</Button>             
    )
}

export default CategoryCard;

