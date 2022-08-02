import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const MealPage = () => {
  const [meal, setMeal] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  let { id } = useParams();

  useEffect( () => {
    fetch(`http://localhost:3001/meals/${id}`)
      .then( res => res.json() )
      .then( mealData => {
        setMeal(mealData)
        setIsLoaded(true)
      } )
  }, [])

  const { strMeal: name, strMealThumb: image } = meal;
  
  const titleCase = (title) => {
    const ignoredWords = [ 'to', 'the', 'from', 'of', 'with' ]

    const formattedTitle = title.split(' ').map( word => {
        if( ignoredWords.includes( word.toLowerCase() ) ) {
          return word;
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      } )
      .join(' ');

    return formattedTitle;
  }

  if(!isLoaded) return <h3>Loading</h3>

  return (
    <Container id="recipe-container">
      <Image
        className="meal-recipe-image"
        src={ image }
      />
      <h4>{ titleCase( name ) }</h4>
      <Container id="ingredient-list">
        
      </Container>
    </Container>
  )
};

export default MealPage;