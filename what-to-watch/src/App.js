import './App.css';
import React, {Component} from 'react'
import Movies from './components/MovieCard.js';


class App extends Component {
  constructor(props) {
    super()
    this.state={
      movies: [],
    }
  }

  componentDidMount() {
    let moviesUrl = "http://www.omdbapi.com/?apikey=1e0d0e1d&t=Spongebob&type=movie"
    fetch(moviesUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ movies: data })
        console.log(this.state.movies.Title)
      })
  }

  render () {
    return (
      <div className="App">
        <div className="header">
          <p>Header thing here</p>
        </div>
        <div className="result">
          <Movies />
        </div>
        <div className="history">
          <p>History stuff here</p>
        </div>
      </div>
    )
  }
}

export default App;
