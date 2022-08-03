import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { BsYoutube } from 'react-icons/bs';

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

const MealPage = ({ onMealUpdate }) => {
  const [ meal, setMeal ] = useState({});
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isFavorite, setIsFavorite ] = useState(false);
  const { strMeal: name, strMealThumb: image, strInstructions: instructions } = meal;

  let { id } = useParams();

  useEffect( () => {
    fetch(`http://localhost:3001/meals/${id}`)
      .then( res => res.json() )
      .then( meal => {
        setMeal(meal);
        setIsFavorite(meal.favorite);
        setIsLoaded(true);
      } )
  }, [ id ] )

  if(!isLoaded) return (
    <Spinner animation="border" variant="info" />
  )

  const updateMeal = (mealToUpdate) => {
    fetch(`http://localhost:3001/meals/${mealToUpdate.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite: !meal.favorite
      })
    })
      .then(res => res.json() )
      .then( updatedMeal => {
        setMeal(updatedMeal);
        onMealUpdate(updatedMeal);
      } )
  }

  const handleFavoriteClick = () => {
    setIsFavorite( isFavorite => !isFavorite );

    const updatedMeal = {
      favorite: !meal.favorite,
      ...meal
    }

    updateMeal(updatedMeal);
  }

  const fillIngredientList = () => {
    const ingredientsArray = []

    for(let i = 1; i <=20; i++) {
      if( meal[`strIngredient${i}`] === '' || meal[`strMeasure${i}`] === '' ) { break }

      const ingredient = `${meal[`strIngredient${i}`].charAt(0).toUpperCase()}${meal[`strIngredient${i}`].slice(1)}`;
      const measurement = `${meal[`strMeasure${i}`].charAt(0).toUpperCase()}${meal[`strMeasure${i}`].slice(1)}`;
      
      ingredientsArray.push(`${ ingredient }: ${ measurement }`)
    }

    return ingredientsArray.map( ing => {
      return(
        <li key={ ing }>{ ing }</li>
      )
    })
  }

  return (
    <Container id="recipe-container">
        <Image
          className="meal-recipe-image"
          src={ image }
        />
        <h4>{ titleCase( name ) }</h4>
        <Container id="buttons">
          <Button
            onClick={ handleFavoriteClick }
            variant="success"
            size="sm"
          >
            <strong>{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }</strong>
          </Button>
          <a href={ meal.strYoutube } target="_blank">
            <Button
              onClick={ handleFavoriteClick }
              variant="outline-secondary"
              size="sm"
            >
              <BsYoutube style={{
                color: "red",
                fontSize: "40px",
                marginRight: "10px"
              }}/>
              <strong>
                Watch on Youtube
              </strong>
            </Button>
          </a>
        </Container>
      <hr className="hr-text" data-content="Ingredients" />
      <Container id="ingredients-container">
        <ul id="ingredient-list">
          {
            fillIngredientList()
          }
        </ul>
      </Container>
      <hr className="hr-text" data-content="Instructions" />
      <Container id="instructions-container">
        <p>
          { instructions }
        </p>
      </Container>
    </Container>
  )
};

export default MealPage;