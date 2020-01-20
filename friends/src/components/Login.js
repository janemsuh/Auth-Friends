import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
    const [credentials, setCredentials] = useState({
        usename: '',
        password: ''
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => {
                console.log('error', err);
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
};

export default Login;