import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, } from '@mui/material';

const Onother = () => {
    return (
        <Container sx={{ mt: 4 }} >
            <Grid container spacing={2}>
                {/* <Grid item sx={{ mt: 10 }} xs={12} md={6}>




            </Grid> */}
                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>
                    <div style={{ fontSize: 50 }} >

                        <i class="fas fa-truck" ></i>
                    </div>

                    <h5>Free Shipping</h5>
                    <p>Free shipping on all US order or order above $200</p>
                </Grid>
                <hr />
                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>
                    <div style={{ fontSize: 50 }} >

                        <i class="fas  fa-phone-alt"></i>
                    </div>

                    <h5>Support 24/7</h5>
                    <p>Contact us 24 hours a day, 7 days a week</p>
                </Grid>
                <hr />
                <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>
                    <div style={{ fontSize: 50 }} >

                        <i class="fas fa-history"></i>
                    </div>

                    <h5>7 Days Return</h5>
                    <p>Simply return it within 7 days for an exchange.</p>
                </Grid>
                {/* <hr /> */}
                {/* <Grid item xs={12} md={3} sx={{ mt: 10 }} m={0}>
                    <h5>Payment Secure</h5>
                    <p>We ensure secure payment with PEV</p>
                </Grid> */}


            </Grid>
        </Container>
    );
};

export default Onother;