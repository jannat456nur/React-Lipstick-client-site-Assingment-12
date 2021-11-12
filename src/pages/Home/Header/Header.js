import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from './../../hooks/useAuth'
import useAuth from '../../../hooks/useAuth'
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { logout, user } = useFirebase()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        KARL LIPSTICK QUEEN
                    </Typography>
                    <Link to="/home" ><Button color="inherit" variant="contained" style={{ textDecoration: 'none' }}>HOME</Button></Link>
                    <Link to="/appointment" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Appointment</Button></Link>
                    <Link to="/addservices" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>AddUser</Button></Link>
                    <Link to="/purchage" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Explore More</Button></Link>
                    {
                        user?.email ?
                            <Button onClick={logout} color="inherit">Logout</Button> :
                            <NavLink to="login">

                                <Button color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;