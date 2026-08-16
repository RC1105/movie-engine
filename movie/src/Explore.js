
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link,Route,Routes } from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Explore() {
    const url="https://www.omdbapi.com/?apikey=2d44c784&s=movie&type=movie"
    const [lstMovies,setMovies]=useState([])
    useEffect(()=>{
        fetchMovies(url)
    },[])
    async function fetchMovies(url){
        let res= await axios.get(url)
        
        //let data=await (f)
        //alert(JSON.stringify(res));
        //alert(JSON.stringify(res.data.Search));
        setMovies(res.data.Search)
    }
  return (
    <div className="App1">
      <header className="App-header">
            <div className="movie-grid">
                {lstMovies.map((item) => (
                    <div className="movie-card" key={item.imdbID}>
                    <img src={item.Poster} alt={item.Title} />
                    <h3>{item.Title}</h3>
                    <p>{item.Year}</p>
                    </div>
                ))}
                </div>
            {/*{lstMovies.map((item,index)=>(


                <div key={index}>
                <div></div>
                    <img src={item.Poster}></img><br/>
                    {item.Title}</div>
            ))}*/}
      </header>
    </div>
  );
}

export default Explore;
