import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    paper: {
        background: 'black',
        color: 'white'
    }
})

const Footer = () => {
    const styles = useStyles();
    return (
        <Container sx={{ mt: 4 }} classes={{ paper: styles.paper }}
        >
            <Grid container spacing={2}>
                {/* <Grid item sx={{ mt: 10 }} xs={12} md={6}>




            </Grid> */}
                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0} bgcolor="error.main" >


                    <h5>Free Shipping</h5>
                    <p>Free shipping on all US order or order above $200</p>
                </Grid>

                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>


                    <h5>Support 24/7</h5>
                    <p>Contact us 24 hours a day, 7 days a week</p>
                </Grid>

                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>


                    <h5>7 Days Return</h5>
                    <p>Simply return it within 7 days for an exchange.</p>
                </Grid>



            </Grid>
        </Container>
    );
};

export default Footer;