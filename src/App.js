import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ShowMovie from './components/ShowMovie';

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
    }
  }
  //ajax call
  async componentDidMount() {
    const proxy = '';
    const response = await fetch('https://movies-crud-backend.herokuapp.com/')
    const json = await response.json();
    this.setState({ movies: json })
    console.log(this.state.movies)
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            {/* Add a header componenet */}
            {/* <MainMenu /> */}
            <Route exact path="/" component={(props) => <Home movies={this.state.movies} />} />
            <Route exact path="/id" component={Code} />
            <Route exact path="/id/:id" component={(props) => {
              return <ShowMovie movies={this.state.movies} {...props} />
            }} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
