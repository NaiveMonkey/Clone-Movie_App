import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
    "Matrix",
    "Full Metal Jacket",
    "Oldboy",
    "Star Wars"
]

const movieImages = [
    "https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL.jpg",
    "https://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/10/the-last-jedi-theatrical-blog.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
          <Movie title={movieTitles[0]} poster={movieImages[0]}/>
          <Movie title={movieTitles[1]} poster={movieImages[1]}/>
          <Movie title={movieTitles[2]} poster={movieImages[2]}/>
          <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
