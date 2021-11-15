import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios'
import './Purchase.css';

const Purchase = () => {
    const [product, setProduct] = useState([])
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://agile-oasis-63624.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    // POST DATA TO SERVER
    const onSubmit = data => {
        axios.post("https://agile-oasis-63624.herokuapp.com/orders", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })
        console.log(data);
    }

    return (
        <div>
            {/* <Header></Header> */}
            <div className='addorders'>
                <h2>PURCHASE PRODUCT</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="form" >
                    {/* Name, email etc from database */}
                    <input {...register("productName")} value={product?.name} />
                    <input {...register("name", { required: true })} defaultValue={user.displayName} />
                    <input {...register("email")} value={user.email} />
                    <textarea {...register("description")} value={product?.description} />
                    <input {...register("address")} placeholder="Address" />
                    <input type="submit" value='Confirm Order' style={{ height: '35px', background: 'navy', cursor: 'pointer', color: '#fff' }} />
                </form>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Purchase;