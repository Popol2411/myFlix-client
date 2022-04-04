import React from 'react';

import { MovieCard } from '../movie-card/movie-card';

import { Row, Col, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export function DirectorView(props) {
  return (
    <>

      <div>
        <Button variant="outline-light" onClick={() => { props.onBackClick() }}>Back</Button>
      </div>

      <div>
        <h1 className="display-4">{props.director.Name}</h1>
      </div>
      <br />
      <div>
        <h4>Some movies from this director:</h4>
      </div>



      <Row className="justify-content-md-center">
        {props.movies.filter(m => m.Director.Name === props.director.Name).map(m => (
          <Col xs={12} sm={6} md={4} className="d-flex" key={m._id}>
            <MovieCard movie={m} />
          </Col>
        ))}
      </Row>




      <Link to={"/"}>
        <Button variant="outline-light">See Full Movie List</Button>
      </Link>
    </>
  )
}
