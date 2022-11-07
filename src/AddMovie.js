import {Button,Modal,Form,FloatingLabel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import { useState } from 'react';

const AddMovie = ({show,handleClose,rateSearch,addMovie} ) => {
    const [newMovie, setNewMovie] = useState({
        title: "",
        img: "",
        rating: "",
        desc:"",
        
      });
const onStarClick=(nextValue, prevValue, name)=> {
    setNewMovie({...newMovie,rating:nextValue});
        }
 const handleChange=(e)=> {
    setNewMovie({...newMovie,[e.target.name]: e.target.value});
        }


  return (
    <>
    
      <Modal
        show={show} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="title" placeholder="title" onChange={handleChange} name="title"/>
      </Form.Group>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newMovie.rating}
          onStarClick={onStarClick}
        />  

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Poster Url</Form.Label>
        <Form.Control type="url" placeholder="Enter url"  onChange={handleChange} name="img"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Description</Form.Label>
      <FloatingLabel
        controlId="floatingTextarea"
        label="description"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="description" onChange={handleChange}  name="desc"/>
      </FloatingLabel>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMovie