import React from 'react';

import PropTypes from 'prop-types';

import { Container, Card, Button } from 'react-bootstrap';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Container>

        <Card>

          <Card.Header>Genre</Card.Header>
          <Card.Body>

            <Card.Title>
              <span className="label">Name: </span>
            </Card.Title>
            <Card.Text>
              <span className="value">{genre.Name}</span>
            </Card.Text>

            <Card.Title>
              <span className="label">Description: </span>
            </Card.Title>
            <Card.Text>
              <span className="value">{genre.Description}</span>
            </Card.Text>

            <Button variant="outline-dark" onClick={() => { onBackClick(); }}>Back</Button>

          </Card.Body>
        </Card>

      </Container>
    );
  }
}

GenreView.proptypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
};