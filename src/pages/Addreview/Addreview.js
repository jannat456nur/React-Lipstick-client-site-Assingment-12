import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './Addreview.css'


const Addreview = () => {
    //distructuring
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        //fetch data from review collection
        axios.post('https://agile-oasis-63624.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }

            })
    }
    return (
        <div className='addsereview'>
            <h1> Please Add Your Review.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input {...register("description")} placeholder="description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addreview;