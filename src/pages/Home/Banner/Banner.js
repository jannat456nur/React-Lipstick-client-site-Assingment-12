import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, } from '@mui/material';
import banner from './bannner.jpg'
import banner2 from './images.jpeg'
import './Banner.css'



// const styles = {
//     banner: {
//         backgroundImage: `url(${banner2})`,
//         backgroundRepeat: ' no-repeat',
//         width: '1000'

//     }
// }
const Banner = () => {
    return (
        <Container xs={12} md={12} >
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10 }} xs={12} md={6}>

                    <h1>LIPSTICK QuEEN</h1>
                    <h3>SHADESHIFTTERS</h3>


                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 10 }} m={0}>
                    <img style={{ width: '100%' }} src={banner} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Banner;

// style={styles.banner}