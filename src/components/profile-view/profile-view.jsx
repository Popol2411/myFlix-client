import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import UserInfo from './user-info';
import { FavoriteMovies } from './favorite-movies';
import UpdateUser from './update-user';

export Function ProfileView({ movies, onUpdateUserInfo }) {

}

return (
  <div>
    <UserInfo name={user.Username} email={user.Email} />
    <FavoriteMovies favoriteMoviesList={favoriteMovieList} />
    <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
  </div>
)