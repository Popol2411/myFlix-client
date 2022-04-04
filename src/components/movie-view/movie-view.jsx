import React from 'react';  //as for the main-view.jsx, react needs to be imported in order to use the react library
import PropTypes from 'prop-types';   //    //since we use prop-types (Property Types), we need to import these too
import { Container, Row, Col, Card, Button, Link } from "react-bootstrap";

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;  //we have 2 CONSTants that we use in this file with props. "movie" and "onBackClick". The propTypes are added at the bottom of the file

    return (    //the return that is rendered to the user
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={movie.ImagePath} />
                <Card.Title>Title: </Card.Title>
                <Card.Text>{movie.Title}</Card.Text>
                <Card.Title>Description: </Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Card.Title>Genre: </Card.Title>
                <Card.Text>{movie.Genre.Name}</Card.Text>
                <Card.Title>Director: </Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>
                <Link to={`/director/${movie.Director.Name}`}>
                  <Button variant="link">Director</Button>
                </Link>
                <Link to={`/genre/${movie.Genre.Name}`}>
                  <Button variant="link">Genre</Button>
                </Link>
              </Card.Body>
            </Card>
            <Button onClick={() => { onBackClick(null); }}>Back</Button>
          </Col>
        </Row>
      </Container >
    );
  }
}

MovieView.propTypes = {   //for our MovieView class we have prop-types
  movie: PropTypes.shape({    //prop-types for "movie", .shape defines an object, further, .shape allows to add extra keys that aren´t specified
    Title: PropTypes.string.isRequired,   //isRequired means that the associated field MUST be filled
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};