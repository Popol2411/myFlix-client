import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src='https://m.media-amazon.com/images/M/MV5BODQ0NjYyOWMtOGE4ZS00MDUxLTgwYzYtNDE2YWY2ODIyNWIzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg' />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link">Check Details</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};

