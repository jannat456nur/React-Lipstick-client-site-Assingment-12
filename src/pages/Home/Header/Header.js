import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



const Header = () => {
    const { logout, user } = useFirebase()
    const theme = useTheme()
    const useStyle = makeStyles({
        navItem: {
            // color: '#fff',
            textDecoration: 'none'
        },
        navicon: {
            [theme.breakpoints.up('md')]: {
                display: 'none'
            },

        },
        navItemContaned: {
            [theme.breakpoints.down('md')]: {
                display: 'none'
            },
        },
        navlogo: {
            [theme.breakpoints.down('md')]: {
                textAlign: 'right'
            },
        }
    })
    const { navItem, navicon, navItemContaned, navlogo } = useStyle()
    const [state, setState] = React.useState(false);
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <Link to="/home">Home</Link>
                </ListItem>
                <Divider />
                <ListItem button >
                    <Link to="/explore">Explore</Link>
                </ListItem>
                <Divider />
                <ListItem button >
                    <Link to="/addreview">AddReview</Link>
                </ListItem>
                <ListItem button >
                    <Link to="/mangeservices">MyOrders</Link>
                </ListItem>
                <Divider />

                <Divider />

            </List>


        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navicon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navlogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            KARL LIPSTICK QUEEN
                        </Typography>
                        <Box className={navItemContaned}>
                            <Link className={navItem} to="/home" ><Button color="inherit" variant="contained" style={{ textDecoration: 'none' }}>HOME</Button></Link>
                            {/* <Link to="/appointment" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Appointment</Button></Link> */}
                            {/* <HashLink className={navItem} to="/addreview" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Add Review</Button></HashLink> */}
                            <Link className={navItem} to="/explore" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Explore More</Button></Link>
                            {/* <Link className={navItem} to="/mangeservices" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>MyOrders</Button></Link> */}

                        </Box>
                        {
                            user?.email ?
                                <Box>
                                    {/* <Link className={navItem} to="/mangeservices" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>MyOrders</Button></Link>
                                    <Link className={navItem} to="/pay" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Pay</Button></Link>
                                    <HashLink className={navItem} to="/addreview" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Add Review</Button></HashLink>
                                    <HashLink className={navItem} to="/addproduct" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Add Product</Button></HashLink> */}
                                    <Link className={navItem} to="/dashboard" ><Button color="inherit" sx={{ ml: 3 }} variant="contained" style={{ textDecoration: 'none' }}>Dashboard</Button></Link>
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink to="login">

                                    <Button color="inherit">Login</Button></NavLink>
                        }
                        <span className="text-white"> {user?.displayName}</span>

                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment >
                    {/* <Button onClick={() => setState(true)}>click</Button> */}
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}

                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Header;