import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Purg from '../Purg/Purg';

const Purchage = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        //load data from services
        fetch('https://agile-oasis-63624.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    })
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', m: 2 }} component="div" color="text.secondary">
                Services We provide
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Purg
                            key={service.name}
                            service={service}
                        ></Purg>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Purchage;