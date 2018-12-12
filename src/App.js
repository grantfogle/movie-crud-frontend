import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ShowMovie from './components/ShowMovie';
import NewMovieForm from './components/NewMovieForm';

const Code = () => {
  return (
    <div>
      <h2>Code page</h2>
    </div>
  )
}

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
      <Link to="/id">
        <button className="btn btn-primary">Id page</button>
      </Link>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: '',
      showForm: false,
      title: '',
      director: '',
      year: '',
      rating: '',
      url: ''
    }
  }
  //ajax call
  async componentDidMount() {
    const proxy = '';
    const response = await fetch('http://localhost:3001/')
    const json = await response.json();
    this.setState({ movies: json })
    console.log(this.state.movies)
  }
  toggleNewMovieForm = () => this.setState({ showForm: !this.state.showForm });

  handleInput = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
    console.log(this.state)
  }

  submitMovie = () => {
    let item = {
      title: this.state.title,
      director: this.state.director,
      year: this.state.year,
      rating: this.state.rating,
      url: this.state.url
    }
    console.log(item)
    fetch('http://localhost:3001/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        const arr = this.state.movies;
        console.log(data)
        arr.push(data[0])
        this.setState({ movies: arr })
      })
    // const newMessage = await response.json()
    // this.setState({ messages: [...this.state.messages, newMessage] })
  }

  //Need put and create routes still
  //Delete Route
  deleteMovie = (id) => {
    fetch(`http://localhost:3001/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          const array = [...this.state.movies];
          let index = array.findIndex((movie) => {
            return movie.id === data[0].id
          });
          if (index !== -1) {
            array.splice(index, 1);
            this.setState({ movies: array })
          }
          // removeThing(e) {
          //   var array = [...this.state.things]; // make a separate copy of the array
          //   var index = array.indexOf(e.target.value) // instead of e.target.value you can use id in promise resolution
          //   if (index !== -1) {
          //     array.splice(index, 1);
          //     this.setState({things: array});
          //   }
          // },
        }
      })
  }


  render() {
    console.log(this.state.showForm)
    return (
      <Router>
        <div>
          <Header toggleNewMovieForm={this.toggleNewMovieForm} />
          <div className="container">
            <div style={{ display: `${this.state.showForm ? 'block' : 'none'}` }}>
              <NewMovieForm handleInput={this.handleInput} submitMovie={this.submitMovie} />
            </div>

            {/* Add a header componenet */}
            {/* <MainMenu /> */}
            <Route exact path="/" component={(props) => <Home movies={this.state.movies} deleteMovie={this.deleteMovie} />} />
            <Route exact path="/id" component={Code} />
            <Route exact path="/id/:id" component={(props) => {
              return <ShowMovie movies={this.state.movies} {...props} />
            }} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
