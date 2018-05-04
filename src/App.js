import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
    },
    {
        title: "Full Metal Jacket",
        poster: "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL.jpg"
    },
    {
        title: "Oldboy",
        poster: "https://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg"
    },
    {
        title: "Star Wars",
        poster: "https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/10/the-last-jedi-theatrical-blog.jpg"
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
          {movies.map((movie, index) => {
              return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })}
      </div>
    );
  }
}

export default App;
