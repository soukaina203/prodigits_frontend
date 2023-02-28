import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        // Save the token to the local storage or store it in the Redux store
        console.log(data.token);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;