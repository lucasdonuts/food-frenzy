import React, { useState } from 'react';
import { titleCase } from './MealPage';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MealCard = ({ meal, onRemoveFavorite }) => {
  const [ isFavorite, setIsFavorite ] = useState(meal.favorite);

  const name = meal.strMeal ? titleCase( meal.strMeal ) : 'Missing Name'

  const updateMeal = () => {
    fetch( `http://localhost:3001/meals/${meal.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite: !isFavorite
      })
    } )
      .then( res => res.json() )
      .then( onRemoveFavorite )
  }

  const handleFavoriteClick = () => {
    setIsFavorite( isFavorite => !isFavorite );

    updateMeal();
  }

  return (
    <Card
      border="dark"
      className="meal-card"
    >
      <LinkContainer to={ `/meals/${ meal.id }` } >
        <Link to="#" className="image-wrap">
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
      <Card.Body className="card-body">
        <LinkContainer to={ `/meals/${ meal.id }` } >
          <Link to="#">
            <Card.Text>{ name }</Card.Text>
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