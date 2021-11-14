import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Explore = () => {
    const [service, setService] = useState()
    const { serviceId } = useParams();
    console.log(serviceId)
    useEffect(() => {
        fetch(`./products.json ${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h4>Details of </h4>
            {/* <h4>{service.name} </h4> */}
            <h4>booking:{serviceId}</h4>
        </div>
    );
};

export default Explore;