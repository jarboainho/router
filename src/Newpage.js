import React from 'react'
import { Link,useParams } from "react-router-dom";



const Newpage = ({movies}) => {
const params = useParams();
const one= movies.find(movie => movie.id == params.id);
 
  return (
    <div>
      <div>
        <h1>Description</h1>      
        {one.description}
        </div>

        <div>
          <h1>Trailer</h1>
          {one.video}
        </div>

        <button> <Link to="/">Back</Link> </button>
    </div>
    
  )
}

export default Newpage;