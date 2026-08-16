import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link,Route,Routes } from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'

import Explore from './Explore.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">

 <BrowserRouter>
      <div className="App">
 
        <nav className="navbar">
          <Link to="/">
            Home
          </Link>

          <Link to="/explore">
            Explore
          </Link>
          <Link to="/about">
            About
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
