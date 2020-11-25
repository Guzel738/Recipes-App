import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Recipe = ({title, calories, portions, ingredients, image}) => {
    return (
        <Card bg={'light'} text={'dark'}>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
                <Card.Title style={{fontSize: 25}}>{title}</Card.Title>
                <Card.Subtitle className="mb-3">{Math.round(calories)} calories</Card.Subtitle>
                <Card.Subtitle>{portions} portions</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {ingredients.map((ingredient, index) => (
                    <ListGroup.Item
                        key={index}
                        style={{ color: 'black' }}
                        variant="info"
                    >
                        {ingredient.text}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    )
}

export default Recipe