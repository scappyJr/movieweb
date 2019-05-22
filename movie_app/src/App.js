import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render : componentWillMount() => render() => coponentDidMound()
  // Update : componentWillReceiveProps() => shouldComponentUpdate() == true 
  //  => componentWillUpdate() => render() => componentDidUpdate()

  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({    
        movies: [
          {
            title: "Avengers: Endgame",
            poster: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg"
          },
          {
            title: "Pokemon Detective Pikachu",
            poster: "https://movie-phinf.pstatic.net/20190424_53/1556091565705XDpwg_JPEG/movie_image.jpg"
          },
          {
            title: "Non-Fiction",
            poster: "https://movie-phinf.pstatic.net/20190417_245/1555462540025mC6bv_JPEG/movie_image.jpg"
          },
          {
            title: "Aladdin",
            poster: "https://movie-phinf.pstatic.net/20190418_264/1555551136912Gc6Bh_JPEG/movie_image.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    });

    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading..'}
      </div>
    )
  }
}

export default App;
