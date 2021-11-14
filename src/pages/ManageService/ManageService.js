import React, { useEffect, useState } from 'react';


const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleFelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }

            })
    }
    return (
        <div>
            <h4>manage services</h4>
            <li>

                {
                    services.map(services => <div
                        key={services.id}


                    >
                        <h4>{services.name}</h4>
                        <button onClick={() => handleFelete(services._id)}>Delete</button>

                    </div>)
                }
            </li>

        </div>
    );
};

export default ManageService;