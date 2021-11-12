import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import img from '../Banner/images (1).jpeg'

const useStyles = makeStyles({
    paper: {
        background: 'black',
        color: 'white'
    }
})

const Footer = () => {
    const styles = useStyles();
    return (
        // <Container sx={{ mt: 4 }} classes={{ paper: styles.paper }}>
        //     <Grid container spacing={2}>
        //         {/* <Grid item sx={{ mt: 10 }} xs={12} md={6}>




        //     </Grid> */}
        //         <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0} bgcolor="error.main" >


        //             <h5>Free Shipping</h5>
        //             <p>Free shipping on all US order or order above $200</p>
        //         </Grid>

        //         <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>


        //             <h5>Support 24/7</h5>
        //             <p>Contact us 24 hours a day, 7 days a week</p>
        //         </Grid>

        //         <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>


        //             <h5>7 Days Return</h5>
        //             <p>Simply return it within 7 days for an exchange.</p>
        //         </Grid>



        //     </Grid>
        // </Container>
        <Box style={{
            background: 'black',
            color: 'white',
            height: '200%',
            display: 'flex'
        }}>
            <Grid item xs={12} md={4} sx={{ mt: 10 }} m={0}>

                <img style={{ width: '50%' }} src={img} alt="" />
                <h5><i class="fas fa-map-marker-alt"></i> 68 Tran Hung Dao, Binh Luc, H.Nam</h5>
                <p><i class="fas fa-phone-volume"></i> +84 962 216 601</p>
                <p><i class="fas fa-envelope"></i> contact@company.mail.com</p>
            </Grid>
            <Grid item xs={12} md={4} sx={{ mt: 10 }} m={0} >


                <h5>User Links</h5>
                <p>Blog</p>
                <p>About us</p>
                <p> Contact</p>
                <p>Services </p>
                <p>Events </p>
            </Grid>

            <Grid item xs={12} md={4} sx={{ mt: 10 }} m={0}>


                <h3>Quick Contact</h3>

                <form >

                    <input style={{ width: '200px', height: '40px' }} placeholder="email" /><br />

                    <input style={{ width: '200px', height: '100px' }} placeholder="message" /><br />
                    <input type="submit" />
                </form>
                <p>Copyright © 2016. Designer by NthPsd. All Rights Reserved.</p>
            </Grid>
        </Box>
    );
};

export default Footer;