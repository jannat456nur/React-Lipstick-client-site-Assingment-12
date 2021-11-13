import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
// import './AddServices.css'

const Addreview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('https://agile-oasis-63624.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }

            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} />
                <input {...register("description")} placeholder="description" />
                {/* <input type="number" {...register("price")} placeholder="price" /> */}
                {/* <input {...register("img")} placeholder="img" /> */}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addreview;