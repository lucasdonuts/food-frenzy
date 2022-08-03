import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const AddRecipe = ( addMeal ) => {
    const [formData, setFormData ] = useState({ });

    let { id } = useParams();

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

   function handleChange(e){
    setFormData({...formData, [e.target.controlId] : e.target.value})
   }

    return(
        <Container className = "recipe-form">
            <h1>Add Your Recipe!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className= "recipe-name" controlId="formRecipeName" onChange ={handleChange}>
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter recipe name"/>
                </Form.Group>

                <Form.Group className= "ingredients" controlId="formIngredients" onChange ={handleChange}>
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control type="text" placeholder="Insert ingredient"/>
                </Form.Group> 

                <Form.Group className= "instructions" controlId="formInstructions" onChange ={handleChange}>
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="Insert instructions"/>
                </Form.Group>

                <Form.Group className= "image" controlId="formImage" onChange ={handleChange}>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" placeholder="Upload Image"/>
                </Form.Group>
                <Button type ="submit">Add Recipe</Button>  
            </Form>
        </Container>
    )
}

export default AddRecipe;