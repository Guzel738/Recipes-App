import React, {useState, useEffect, useRef} from 'react'
import Recipe from "./Recipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import CardColumns from "react-bootstrap/CardColumns";

const App = () => {
    const APP_ID = '9c9ae689'
    const APP_KEY = 'ef20a8e8ba7fb5aea84ec6bef6eb8e42'

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState('cake')
    const input = useRef(null)

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        const data = await response.json()
        setRecipes(data.hits)
        setSearch('')
    }

    const getQuery = event => {
        event.preventDefault()
        setQuery(search)
        input.current.blur()
    }

    return (
        <Container fluid="md" className="App">
            <Form onSubmit={getQuery} className="my-3">
                <Form.Row>
                    <Col style={{width: 'calc(100% - 83px)'}}>
                        <Form.Control
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            ref={input}
                        />
                    </Col>
                    <Col style={{width: '83px', flex: 'none'}}>
                        <Button className="search-button" type="submit">Search</Button>
                    </Col>
                </Form.Row>
            </Form>
            <CardColumns className="recipes">
                {recipes.map((recipe, index) => (
                    <Recipe
                        key={index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        portions={recipe.recipe.yield}
                        ingredients={recipe.recipe.ingredients}
                        image={recipe.recipe.image}
                    />
                ))}
            </CardColumns>
        </Container>
    )
}

export default App;
