import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { auth } from '../../firebase';

export const Login = () => {
    const { push } = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);

            push('/profile');
        } catch (e) {
            setError(e);
        }
    };

    return (
        <div>
            <Link to='/' className='link-nav'> Home </Link>
            <form onSubmit={handleSubmit} action="" className="login_form">
                <h1>Login</h1>
                <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter email' />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handlePassChange}
                    value={password}
                />
                {error && <div>{error.toString()}</div>}
                <Button className="submit_button" type="submit" variant="outlined" style={{ border: 'none', backgroundColor: 'rgb(14, 50, 168)', color: 'white' }}>Submit</Button>
                <hr />
                <p>
                    Already have an account? <Link to='/login'>Login</Link>
                </p>

            </form>

        </div>
    )
}