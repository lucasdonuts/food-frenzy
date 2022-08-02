import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const MealPage = () => {
  const [meal, setMeal] = useState({});

  useEffect( () => {
    fetch(`http://localhost:3001/meals/${id}`)
      .then( res => res.json() )
      .then( setMeal )
  }, [])
  
  const titleCase = (title) => {
    const ignoredWords = [ 'to', 'the', 'from', 'of', 'with' ]
    const formattedTitle = title.split(' ').map( word => {
      if( !ignoredWords.includes( word.toLowerCase() ) ) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    } ).join(' ');

    return formattedTitle;
  }

  return (
    <Container id="recipe-container">
      <Image
        className="meal-recipe-image"
        src={ meal.strMealThumb }
      />
      <h4>{ titleCase( meal.strMeal ) }</h4>
    </Container>
  )
};

export default MealPage;