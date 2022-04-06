// main-view.jsx
import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { NavbarView } from '../navbar-view/navbar-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';



import { Row, Col, Container } from 'react-bootstrap';

export class MainView extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: [],
      user: null
    };
  }

  getMovies(token) {
    axios.get('https://myflixdbpopol.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  render() {
    const { movies, user } = this.state;

    return (
      <Router>
        <NavbarView user={user} />
        <Container>

          <Row className="main-view justify-content-md-center">

            <Route exact path="/" render={() => {
              if (!user) return (
                <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              )
              if (movies.length === 0) return <div className="main-view"></div>

              return movies.map(m => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ))
            }} />

            <Route path='/register' render={() => {
              if (user) return <Redirect to="/" />
              return <Col lg={8} md={8}>
                <RegistrationView />
              </Col>
            }} />

            <Route path="/movies/:movieId" render={({ match, history }) => {
              return <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route path="/director/:name" render={({ match, history }) => {
              if (!user) return <Redirect to="/" />
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <DirectorView movies={movies} director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route path="/genre/:name" render={({ match, history }) => {
              if (!user) return <Redirect to="/" />
              // If movie list is empty (while movies load from API), display empty page
              if (movies.length === 0) return <div className="main-view" />;
              return (
                <Col xs={12} md={10}>
                  <GenreView movies={movies} genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                </Col>
              )
            }} />

          </Row>
        </Container>
      </Router>
    );
  }
}
