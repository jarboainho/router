import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import  { useState } from 'react'


const Search = ({search, byrate, rateSearch}) => {
    const [rating, setrating] = useState(1)
    const onStarClick=(nextValue, prevValue, name)=> {
      byrate( nextValue);
      }
  return (
    <div className='firstpart'>
        <input type="text"
                placeholder="Enter Movie Name " 
                className="inputText"
                onChange={(e)=>search(e.target.value)}>                     
         </input>

         <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rateSearch}
          onStarClick={onStarClick}
        />      
    </div>
  )
}

export default Search