
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link,Route,Routes } from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Explore() {
    let url="https://www.omdbapi.com/?apikey=2d44c784&s=movie&type=movie"
    const [lstMovies,setMovies]=useState([])
    const [filter,setFilter]=useState('');
    useEffect(()=>{
      if(filter!='' && filter!=undefined){
        url=url.replace("s=movie","s="+filter)
      }
      else{
     url="https://www.omdbapi.com/?apikey=2d44c784&s=movie&type=movie"

      }
      fetchMovies(url)
    },[filter])
    async function fetchMovies(url){
        let res= await axios.get(url)
        if(res?.data?.Search){

        setMovies(res.data.Search)
        }
        else{
          setMovies([])
        }
        //let data=await (f)
        //alert(JSON.stringify(res));
        //alert(JSON.stringify(res.data.Search));
    }
  return (
    <div className="App1">
      <header className="App-header">
            <input type="text" placeholder="Filter based on name" value={filter} onChange={(event)=>{setFilter(event.target.value)}}></input>
            {filter? "Showing results for- '"+filter+"'"  : ""}
            
            <div className="movie-grid">
                {lstMovies.map((item) => (
                    <div className="movie-card" key={item.imdbID}>
                    <img src={item.Poster} alt={item.Title} />
                    <h3>{item.Title}</h3>
                    <p>{item.Year}</p>
                    </div>
                ))}
                </div>
      </header>
    </div>
  );
}

export default Explore;
