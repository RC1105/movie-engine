import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link,Route,Routes, useNavigate } from 'react-router-dom';

function Home() {
    const navigate =useNavigate();
  return (
    <div className="App1">
      <header className="App-header">

          <h1>MOVIE ENGINE</h1>
          Discover. Explore. Watch. Repeat. 
          <br/><br/>
            <button onClick={()=>{navigate("/Explore")}}>Let's Get Started</button>
          <div className='linx' >
            Order Essentials from Amazon<br/>
            <a href='https://amzn.in/d/02FtKXV5' target="_blank">Bean Bag</a>
            <a href='https://amzn.in/d/09IkkvLv' target="_blank">Popcorn</a>
          </div>
      </header>
    </div>
  );
}

export default Home;
