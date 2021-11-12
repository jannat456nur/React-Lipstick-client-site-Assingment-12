import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './AddServices.css'


const Addservices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }

            })
    }
    return (
        <div className="addservices">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <input {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservices;