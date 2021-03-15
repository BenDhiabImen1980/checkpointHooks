import React from 'react'
import Card from 'react-bootstrap/Card'
import ReactStars from "react-rating-stars-component"

const MovieCard = ({film}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Title>{film.title}</Card.Title>
                <Card.Img variant="top" src={film.poster} />
                <Card.Body>         
                    <Card.Text>{film.descrip}</Card.Text>
                    <ReactStars name ="rate" starcount={5} value={film.rate}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard