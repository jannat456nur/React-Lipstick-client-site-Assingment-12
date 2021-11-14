
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';



const Products = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        //load data
        fetch('https://agile-oasis-63624.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    })
    return (
        <Box sx={{ flexGrow: 1 }}>

            {/* <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'success.main', m: 2 }} component="div" color="text.secondary">
                Our Services
            </Typography> */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', m: 2 }} component="div" color="text.secondary">
                Services We provide
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        window.location.href === 'https://agile-oasis-63624.herokuapp.com/services' ?
                            services.slice(0, 4).map(service => <Product
                                key={service.id}
                                service={service}
                            ></Product>) :
                            services.slice(0, 6).map(service => <Product
                                key={service.id}
                                service={service}
                            ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;