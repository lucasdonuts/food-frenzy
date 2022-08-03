import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MealCard = ({ meal }) => {
  const [ isFavorite, setIsFavorite ] = useState(meal.favorite);

  const updateMeal = () => {
    console.log(`Inside update before: ${isFavorite}`)

    fetch( `http://localhost:3001/meals/${meal.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite: isFavorite
      })
    } )

    console.log(`Inside update after: ${isFavorite}`)

  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation(e);
    console.log(`Inside handle before: ${isFavorite}`)
    setIsFavorite( isFavorite => !isFavorite );
    console.log(`Inside handle after: ${isFavorite}`)

    updateMeal();
  }

  return (
    <Card
      border="dark"
      className="meal-card"
    >
      <LinkContainer to={ `/meals/${ meal.id }` } >
        <Link className="image-wrap">
          <Card.Img
            className="meal-card-image"
            variant="top"
            src={ meal.strMealThumb }
            alt={ meal.strMeal }
          />
          <Card.ImgOverlay className="overlay-text">
            <Card.Title>View Recipe</Card.Title>
          </Card.ImgOverlay>
        </Link>
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={ `/meals/${ meal.id }` } >
          <Link>
            <Card.Title>{ meal.strMeal }</Card.Title>
          </Link>
        </LinkContainer>
      </Card.Body>
      <Card.Footer className="d-grid gap-2">
        <Button
          onClick={ handleFavoriteClick }
          variant="success"
          size="sm"
        >
          <strong>{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }</strong>
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default MealCard;