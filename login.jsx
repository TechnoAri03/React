import React, { useState } from 'react';
import { useHistory, link } from 'react-router-dom';
// import App2 from './App2';

function LoginForm() {
    const [username, setUsername] = useState('Aritra');
    const [password, setPassword] = useState('parui0');
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Call API or perform login logic here
        if (username === 'admin' && password === 'password') {
            // Login successful, navigate to Dashboard page
            history.push('/quiz');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                Username:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit"><link rel="stylesheet" href="" /> Login</button>
        </form>
    );
}

export default LoginForm;