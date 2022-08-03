import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { HiPlusSm } from 'react-icons/hi';

const AddRecipe = ( addMeal ) => {
    const [formData, setFormData ] = useState({ });
    const [ ingredientCount, setIngredientCount ] = useState(3);

    const ingredientInputs = () => {
      const inputArray = []

      for(let i=1; i<=ingredientCount; i++) {
        inputArray.push(
          <Row key={ `ingredient-${ i }` }>
            <Col className="col-md-auto p-1">
              <Form.Group 
                onChange={ handleChange }
                className= "measurement" 
                controlId={ `strMeasure${i}` }
              >
                <Form.Control
                  type="text"
                  placeholder="Measurement"
                />
              </Form.Group>
            </Col>
            <Col className="p-1 col">
              <Form.Group
                onChange={ handleChange }
                className= "ingredients" 
                controlId={ `strIngredient${i}` }
              >
              <Form.Control
                      type="text"
                      placeholder="Ingredient"
                    />
              </Form.Group>
            </Col>
          </Row>
        )
      }

      return inputArray;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3001/meals",{
        method : "POST",
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify(formData)
      })
      .then(resp => resp.json())
      .then((mealData) => {
        addMeal(mealData)
      })
      e.target.reset()
    }

    const handleClick = () => {
      setIngredientCount(count => count + 1)
    }

    function handleChange(e){
      setFormData({
        ...formData,
        [e.target.id] : e.target.value
      })
    }

    console.log(formData)

    return(
      <Container className = "recipe-form">
          <h1>Add Your Recipe!</h1>
          <Form>
            <Row className="mb-3">
              <Button type ="submit">Add Recipe</Button>
            </Row>
            <Row>
              <Col>
                <Form.Group className= "recipe-name" controlId="formRecipeName">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter recipe name"/>
                </Form.Group>
                <Form.Group className= "instructions" controlId="formInstructions">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Insert instructions"/>
                </Form.Group>
                <Form.Group className= "image" controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Input Image URL"/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>Ingredients (Max of 20)</Form.Label>
                { ingredientInputs() }
                <div style={{ cursor: 'pointer' }} onClick={ handleClick }>
                  <HiPlusSm /><small>Add Ingredient</small>
                </div>
              </Col>
            </Row>
          </Form>
      </Container>
    )
}

export default AddRecipe;