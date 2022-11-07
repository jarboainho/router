
import { useState } from 'react';
import './App.css';
import movie1 from './Images/movie1.jpg'
import movie2 from './Images/movie2.avif'
import movie3 from './Images/movie3.jpg'
import movie4 from './Images/movie4.jpg'
import movie5 from './Images/movie5.jpg'
import movie6 from './Images/movie6.jpg'
import movie7 from './Images/movie7.jpg'
import movie8 from './Images/movie8.jpg'
import movie9 from './Images/movie9.jpg'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import Newpage from './Newpage';
import MoviesList from './MovieList';

function App() {
  const [nameSearch, setNameSearch] = useState('')
  const [rateSearch, setRateSearch] = useState('')
  const [movies,setMovies]=useState(
    [
      {
        id: Math.random(),
        title: "SPLIT",
        img: movie1,
        rating: 5,
        desc: "It tells the story of two Russian boys....",
        description:'description: It tells the story of two Russian boys whose father suddenly returns home after a 12-year absence. He takes the boys on a holiday to a remote island on a lake that turns into a test of manhood of almost mythic proportions',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/kQlOmLhrELo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: Math.random(),
        title: "AMERICAN PSYCHO",
        img: movie2,
        rating: 5,
        desc: "A frontiersman on a fur trading expedition in the 1820s...",
        description:'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/81mibtQWWBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
      },
      {
        id: Math.random(),
        title: "JOKER",
        img: movie3,
        rating: 3,
        desc: "A politically sensitive murder forces two disparate.....",
        description:'A politically sensitive murder forces two disparate detectives into a battle with the Berlin underworld and a confrontation with their own corruption.',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/zAGVQLHvwOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: Math.random(),
        title: "INCENDIES",
        img: movie4,
        rating: 2,
        desc: "A working-class Italian-American bouncer....",
        description:'A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/0nycksytL1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: Math.random(),
        title: "NOTEBOOK",
        img: movie5,
        rating: 5,
        desc: "A noble family becomes embroiled .....",
        description:'A noble family becomes embroiled in a war for control over the galaxys most valuable asset while its heir becomes troubled by visions of a dark future',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/yDJIcYE32NU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: Math.random(),
        title: "GOOD WILL HUNTING",
        img: movie6,
        rating: 4,
        desc: "A mentally troubled stand-up comedian....",
        description:'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/ReIJ1lbL-Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: Math.random(),
        title: "INCEPTION",
        img: movie7,
        rating: 4,
        desc: "A mentally troubled stand-up comedian....",
        description:'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/YoHD9XEInc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: Math.random(),
        title: "TENET",
        img: movie8,
        rating: 3,
        desc: "A mentally troubled stand-up comedian....",
        description:'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/AZGcmvrTX9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: Math.random(),
        title: "INTERSTELLAR",
        img: movie9,
        rating: 5,
        desc: "A mentally troubled stand-up comedian embarks ...",
        description:'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
        video:<iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
    ]
  )
  const search = (text) =>{
    setNameSearch(text)
 }
 const byrate = (rate) =>{
   setRateSearch(rate)
 }
 const addMovie = (movie) =>{
   setMovies(movies.concat(movie))
 }
 
   return (
     <div className="App">
       <Routes>
       <Route path="/" element={<div>
       <Search search = {search} byrate={byrate} rateSearch={rateSearch}>
       </Search>
       <MoviesList movies = {movies.filter(el=>el.rating>= rateSearch  && el.title.toLowerCase().includes(nameSearch.toLowerCase()))}
       addMovie={addMovie}>
       </MoviesList>
       </div>}/>
       <Route path='/Newpage/:id' element={<Newpage movies={movies}> </Newpage>}></Route> 
       </Routes>
       
     </div>
   );
 }
 
 export default App;
 