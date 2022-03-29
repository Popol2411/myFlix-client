import React from 'react';  //as for the main-view.jsx, react needs to be imported in order to use the react library
import PropTypes from 'prop-types';   //    //since we use prop-types (Property Types), we need to import these too

export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;  //we have 2 CONSTants that we use in this file with props. "movie" and "onBackClick". The propTypes are added at the bottom of the file

    return (    //the return that is rendered to the user
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-genre">
          <span className="label">Genre: </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="movie-description">
          <span className="label">Director: </span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>

      </div>
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
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};