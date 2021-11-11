import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, } from '@mui/material';
import banner from '../Banner/banner_7_720x.jpg'

const Banner2 = () => {
    return (
        <Container >
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10 }} xs={12} md={6}>

                    <h1>Prep. Correct. Perfect.</h1>
                    <h4>Whether you have five minutes to get out the door or an hour to play, these bestsellers are the key to fresh, healthy-looking skin.</h4>

                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 10 }} m={0}>
                    <img style={{ width: '100%' }} src={banner} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Banner2;