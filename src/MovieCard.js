import React from 'react'
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
let id= movie.id


  return (
  <div>
   <Card style={{ width: '16rem' }} className='card'>
      <Card.Img variant="top" src={movie.img} style={{width:255, height:250}}/>
      <Card.Body className='cardbody'>
        <Card.Title className='title'>{movie.title}</Card.Title>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rating}
        /> 
        <Card.Text>
        {movie.desc}
        </Card.Text>
        <button> <Link to={"/Newpage/" + id}>Description&Trailer</Link> </button>
      </Card.Body>
    </Card>
       
  </div>
  )
}

export default MovieCard