import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../pages/Home/Banner/login.jpg'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    //distruring
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useFirebase();
    console.log(user)
//use location and history
    const location = useLocation();
    const history = useHistory();
//button control functionalities
// create functionalities
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    function testFn(arg = 'foo') {
        console.log(arg);
    }


    testFn(null);
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label=" Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label=" Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="outlined" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" >Please Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>________________________________</p>
                    <Button onClick={handleGoogleSignIn}><i style={{ gradient: 'black', color: '' }} class="fab fa-google"></i>  oogle Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;