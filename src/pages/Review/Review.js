
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Rvw from '../Rvw/Rvw'

const Review = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        //load data from review
        fetch('https://agile-oasis-63624.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setService(data))
    })
    return (
        <Box sx={{ flexGrow: 1 }}>

           
            <Typography variant="h4" sx={{ fontWeight: 'bold', m: 2 }} component="div" color="text.secondary">
                <h1>    Reviews</h1>
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Rvw
                            key={service.id}
                            service={service}
                        ></Rvw>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Review;