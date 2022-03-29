import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView(props) {
  const [username, setUsername] = useState('');   //useState is a "Hook" from React. In contrast to a class, functions with hooks don´t need to use the ".this.state". Instead we use "useState" directly  
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();   //preventDefault page, supresses the refresh of the page
    console.log(username, password);
    props.onLoggedIn(username);
  };

  //a form with username, password is being returned to the user in order to submit their info
  // "e" for "event"

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};