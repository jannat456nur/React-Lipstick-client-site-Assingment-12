import React from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Purg = (props) => {
    const { img, price, name, description, _id } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                />
                <CardContent>

                    <Typography variant="h5" component="div" color="text.secondary">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Price:$ {price}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                    <Link to={`/purchage/${_id}`}><Button type="button" value="" variant="contained">Book Now</Button></Link>

                </CardContent>

            </Card>

        </Grid>
    );
};

export default Purg;