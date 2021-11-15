import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
// import './Addreview.css'

const AddProducts = () => {
    //distructuring
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        //fetch data from review collection
        axios.post('http://localhost:5000/addproducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }

            })
    }
    return (
        <div>
            <div className='addsereview'>
                <h1> Please Add Your Products.</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                    <input {...register("description")} placeholder="description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="img url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;