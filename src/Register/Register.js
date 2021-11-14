import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import login from '../pages/Home/Banner/bannner.jpg'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useFirebase();
//create buton handdleing
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography gutterBottom>Please Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label=" Name"
                            name="name"
                            variant="outlined"
                            onBlur={handleOnBlur}
                        />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label=" Email"
                            name="email"
                            type="email"

                            variant="outlined"
                            onBlur={handleOnBlur}
                        />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label=" Password"
                            type="password"
                            name="password"

                            variant="outlined"
                            onBlur={handleOnBlur}
                        />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-Type  Password"
                            type="password"
                            name="password2"

                            variant="outlined"
                            onBlur={handleOnBlur}
                        />


                        <Button sx={{ width: '75%', m: 1 }} type="submit" >Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button >Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} sx={{ mt: 8 }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;