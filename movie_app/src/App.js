import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render : componentWillMount() => render() => coponentDidMound()
  // Update : componentWillReceiveProps() => shouldComponentUpdate() == true 
  //  => componentWillUpdate() => render() => componentDidUpdate()

  state = {}

  componentDidMount() { // render() 후 호출
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={index} />
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi(); // _callApi()가 끝나기를 기다리는 것(성공여부 상관X)
    this.setState({
      movies: movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
