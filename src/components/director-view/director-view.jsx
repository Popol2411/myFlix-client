import React from 'react';

import PropTypes from 'prop-types';

import { Container, Card, Button } from 'react-bootstrap';

export class DirectorView extends React.Component {

  render() {
    const { director, onBackClick } = this.props;

    return (
      <Container>

        <Card>
          <Card.Header>Director</Card.Header>
          <Card.Body>

            <Card.Title>
              <span className="label">Name: </span>
            </Card.Title>
            <Card.Text>
              <span className="value">{director.Name}</span>
            </Card.Text>


            <Card.Title>
              <span className="label">Born: </span>
            </Card.Title>
            <Card.Text>
              <span className="value">{director.Born}</span>
            </Card.Text>


            <Card.Title>
              <span className="label">Bio: </span>
            </Card.Title>
            <Card.Text>
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