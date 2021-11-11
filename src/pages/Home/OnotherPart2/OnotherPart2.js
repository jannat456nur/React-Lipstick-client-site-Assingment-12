import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, } from '@mui/material';
import pic1 from '../Banner/pic1.jpg'
import pic2 from '../Banner/pic2.jpg'
import pic3 from '../Banner/pic3.jpg'
import pic4 from '../Banner/img4.jpg'

const OnotherPart2 = () => {
    return (
        <Container sx={{ mt: 4 }} >
            <h1>You May Also Like</h1>
            <Grid container spacing={2}>
                {/* <Grid item sx={{ mt: 10 }} xs={12} md={6}>




        </Grid> */}
                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>


                    <img sx={{ p: 10 }} style={{ width: '100%' }} src={pic4} alt="" />
                </Grid>

                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>


                    <img style={{ width: '100%' }} src={pic2} alt="" />
                </Grid>

                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>


                    <img style={{ width: '100%' }} src={pic3} alt="" />
                </Grid>
                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>


                    <img style={{ width: '100%' }} src={pic4} alt="" />
                </Grid>



            </Grid>
        </Container>
    );
};

export default OnotherPart2;