import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsYoutube } from 'react-icons/bs';

const MealCard = ({ meal }) => {

  return (
    <Card
      border="dark"
      className="meal-card"
    >
      <Card.Img
        className="meal-card-image"
        variant="top"
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
      />
      <Card.Body>
        <Card.Subtitle>{ meal.strMeal }</Card.Subtitle>
      </Card.Body>
        <a href={ meal.strYoutube } target="_blank">
          <Card.Footer className="d-grid gap-2">
            <Button variant="light" size="sm">
              <BsYoutube style={{
                color: "red",
                fontSize: "40px",
                marginRight: "10px"
              }}/>
              <strong>Watch on YouTube</strong>
            </Button>
          </Card.Footer>
        </a>
    </Card>
  )
}

export default MealCard;