import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const Addservice = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
                console.log(res)
            })
    }
    return (
        <div>
            <h4>car service</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <input {...register("p")} />
                <input type="number" {...register("age")} />
                <input {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;