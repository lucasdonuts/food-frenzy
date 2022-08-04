import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import MealCard from './MealCard';
import Pagination from 'react-bootstrap/Pagination';

const MealsContainer = ({ meals, onRemoveFavorite}) => {
  const [ currentRange, setCurrentRange ] = useState([0, 20]);

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

  // 0, 20
  // 21, 40
  // 41, 60

  const handlePageClick = (e) => {
    const pageNum = e.target.innerText;

    if(pageNum === '1') {
      setCurrentRange([ 0, 20 ]);
    } else {
      const start = pageNum * 20 - 19;
      const end = pageNum * 20;
      setCurrentRange([ start, end ]);
    }
  }

  const mealPages = () => {
    let pages = [];
    let numOfPages = mealComponents.length / 20 + 1;

    for( let pageNum = 1; pageNum <= numOfPages; pageNum++ ) {
      pages.push(
        <Pagination.Item
          key={ pageNum }
          onClick={ handlePageClick }
          active={ currentRange[1] / 20 === pageNum }
        >
          { pageNum }
        </Pagination.Item>
      )
    }

    return pages;
  }

  const mealPage = mealComponents.slice(...currentRange);

  console.log(currentRange)

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