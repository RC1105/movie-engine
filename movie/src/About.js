import { useNavigate } from 'react-router-dom';
import './App.css';

function About() {
    const navigate =useNavigate();
  return (
    <div className="App1">
      <header className="App-header">

          <h1>MOVIE ENGINE</h1> 
          <div className='about'>
                Movie Engine is your one-stop destination for discovering movies across every genre, category, and mood. Powered by a movie API, it fetches up-to-date movie data and brings together everything from the latest releases and popular blockbusters to timeless classics and hidden gems.
                Browse movies by genre, search for your favorites, explore detailed movie information, and discover something new to watch—all through a clean, fast, and easy-to-use experience.
                Whether you're looking for action, comedy, drama, horror, sci-fi, romance, animation, or anything in between, Movie Engine makes finding your next movie effortless.
                <br/><br/>
                Discover. Explore. Watch. Repeat.
                <br/><br/>
                <button onClick={()=>{navigate("/Explore")}}>Let's get started</button>
            </div>
            

      </header>
    </div>
  );
}

export default About;
