import React, { useState } from 'react';
import MovieCard from './MovieCard'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';


const MoviesList = ({movies,addMovie}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='secondpart' >
      
      <Button variant="primary" onClick={handleShow}>
        ADD NEW MOVIE
      </Button>
     
      <AddMovie show={show} handleClose={handleClose} 
      addMovie={addMovie} ></AddMovie>
      <div className='cards'>
        {movies.map(el=><MovieCard movie={el}/>)}
      </div>
    </div>
  )
}

export default MoviesList