import React from 'react';

import PropTypes from 'prop-types';

import { Container, Card, Button, Row } from 'react-bootstrap';

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick } = this.props;

    return (
      <Container>

        <Card>
          <Card.Body>
            <Card.Title>Director</Card.Title>
            <Card.Text>
              <span className="label">Name: </span>
              <span className="value">{director.Name}</span>
            </Card.Text>
            <Card.Text>
              <span className="label">Born: </span>
              <span className="value">{director.Born}</span>
            </Card.Text>
            <Card.Text>
              <span className="label">Bio: </span>
              <span className="value">{director.Bio}</span>
            </Card.Text>
            <Button variant="outline-light" onClick={() => { onBackClick(); }}>Back</Button>
          </Card.Body>
        </Card>

      </Container>
    );
  }
}

DirectorView.proptypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Born: PropTypes.number.isRequired,
    Bio: PropTypes.string.isRequired,
  }).isRequired,
};