import React from 'react';    //react library is added and imported for use
import axios from 'axios';    //axios imported. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import { Container, Row, Col, Button } from 'react-bootstrap';

// all 4 jsx files are imported into the main view from the 'src/components/' folders

export class MainView extends React.Component {   //export class is added, if we would just write class MainView... we would have to add "export default MainView" at the bottom of the document

  constructor() {   //the constructor for a React component is called before it is mounted
    super();    //initial state of the component
    this.state = {
      movies: [], //empty array which will be filled with the axios.get response from the componentDidMount function
      selectedMovie: null,  //null which means without a value
      user: null,
    }
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

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onRegistration(register) {
    this.setState({
      register
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

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  render() {    //rendering is so called what is displayed to the user
    const { movies, selectedMovie, user, register } = this.state;

    if (!register) return <RegistrationView onRegistration={register => this.onRegistration(register)} />;    //if the user is not registered he will be directed to the registration

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;     //if the user is not logged in he will be directed to the login

    if (movies.length === 0) return <div className="main-view" />;      //otherwise the user will be directed to the main-view class (which is the return below)

    //the main-view returns that from the MovieView, which is a general view with all movies, if you click a movie, this "newSelectedMovie" will be displayed

    return (
      <Container>
        <Row className="main-view justify-content-md-center">
          {selectedMovie
            ? (
              <Col md={8}>
                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              </Col>
            )
            : (
              movies.map(movie => (
                <Col key={movie._id} md={4}>
                  <MovieCard movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                </Col>
              ))
            )
          }
        </Row>
        <Button onClick={() => { this.onLoggedOut() }}>Logout</Button>
      </Container >
    );
  }

}

