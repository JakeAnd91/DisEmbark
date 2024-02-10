import React, { useState } from 'react';
import Fr from '../fr.input/fr'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, such as making an API call to authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Sign in Here!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Fr prompt="Username: " placeholder="Username"/>
          &nbsp;
          <Fr hideCharacters prompt="Password: " placeholder="Password"/>
          &nbsp;
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;