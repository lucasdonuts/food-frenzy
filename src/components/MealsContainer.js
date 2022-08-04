import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import MealCard from './MealCard';
import Pagination from 'react-bootstrap/Pagination';

const MealsContainer = ({ meals, onRemoveFavorite}) => {
  const [ currentPage, setCurrentPage ] = useState(1);

  const noMealsMessage = (
    <h4>
      No meals to display.
    </h4>
  )

  const mealComponents = meals.map( meal => {
    return (
        <MealCard
          key={ meal.id }
          meal={ meal }
          onRemoveFavorite={ onRemoveFavorite }
        />
    )
  })

  const handlePageClick = (e) => {
    setCurrentPage(e.target.innerText);
  }

  const mealPages = () => {
    let pages = [];
    let numOfPages = meals.length / 20;

    for( let pageNum = 1; pageNum <= numOfPages; pageNum++ ) {
      pages.push(
        <Pagination.Item
          key={ pageNum }
          onClick={ handlePageClick }
          active={ currentPage === pageNum }
        >
          { pageNum }
        </Pagination.Item>
      )
    }

    return pages;
  }

  const mealPage = mealComponents.slice(currentPage, 20);

  return (
    <>
      <Container className="meals-container">
        <Container id="page-select-container">
          <Pagination>{ mealPages() }</Pagination>
        </Container>
        { mealPage.length > 0 ? mealPage : noMealsMessage }
      </Container>
    </>
  )
};

export default MealsContainer;