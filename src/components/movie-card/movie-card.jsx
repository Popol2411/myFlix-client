import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col>
      <Card>
        <Card.Img variant="top" src={movie.ImagePath}  crossOrigin="true" />
        <Card.Body>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link">Show Details</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
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

