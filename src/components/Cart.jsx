import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';

function Cart() {
    const initialValues = {
        title: '',
        price: '',
        cutofprice: '',
        rating: '',
        ratingcount: '',
        discription: '',
        sku: '',
        category: '',
        tags: '',
        image: [],  // initialize as array
    };

    const key = 'NpBEIMw8WujB8YXy';

    const [data, setdata] = useState([])

    const Products = () => {
        axios.get('https://generateapi.onrender.com/api/cart', {
            headers: {
                Authorization: key,
            }
        })
            .then((res) => {
                console.log("hyy");
                setdata(res.data.Data)

            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        Products()
    }, [])

    const handleSubmit = (values, { resetForm }) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('price', values.price);
        formData.append('cutofprice', values.cutofprice);
        formData.append('rating', values.rating);
        formData.append('ratingcount', values.ratingcount);
        formData.append('discription', values.discription);
        formData.append('sku', values.sku);
        formData.append('category', values.category);
        formData.append('tags', values.tags);

        values.image.forEach((img) => {
            formData.append('image', img);
        });

        axios
            .post('https://generateapi.onrender.com/api/cart', formData, {
                headers: {
                    Authorization: key,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log('Success:', response.data);
                Products()
                resetForm();
            })
            .catch((error) => {
                console.error('Upload error:', error);
            });
    };
        const deletdata = (id) => {
        axios.delete(`https://generateapi.onrender.com/api/cart/${id}`, {
            headers: {
                Authorization: key,
                'Content-Type': 'multipart/form-data'
            },
        })
            .then((res) => {
                console.log("hello");
                Products()
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ setFieldValue }) => (
                    <Form encType="multipart/form-data">
                        <Field name="title" type="text" placeholder="Title"  />
                        <Field name="price" type="number" placeholder="Price" />
                        <Field name="cutofprice" type="number" placeholder="Cut-off Price" />
                        <Field name="rating" type="number" placeholder="Rating" />
                        <Field name="ratingcount" type="number" placeholder="Rating Count" />
                        <Field name="discription" type="text" placeholder="Description" />
                        <Field name="sku" type="text" placeholder="SKU" />
                        <Field name="category" type="text" placeholder="Category" />
                        <Field name="tags" type="text" placeholder="Tags" />

                        <input
                            name="image"
                            type="file"
                            multiple
                            onChange={(e) => {
                                const files = Array.from(e.currentTarget.files);
                                setFieldValue('image', files);
                            }}
                        />

                        <button type="submit">Submit</button>
                        
                    </Form>
                )}
            </Formik>

            <Box sx={{
                width: '100%',
            }}>

                {
                    data.map((a, index) => (
                        <>
                                    <button onClick={() => deletdata(a._id)}>Delete{index+1}</button>  
                        </>
                    ))}

            </Box >
        </>
    );
}

export default Cart;




{/* {/* // NpBEIMw8WujB8YXy


// POST : https://generateapi.onrender.com/api/cart
// GET : https://generateapi.onrender.com/api/cart
// DELETE : https://generateapi.onrender.com/api/cart/:id
// PATCH : https://generateapi.onrender.com/api/cart/:id


// 

//     "title": "Sample Text",
//     "price": 13390,
//     "cutofprice": 14037,
//     "rating": 38236,
//     "ratingcount": 94240,
//     "discription": "Sample Text",
//     "sku": "Sample Text",
//     "category": "Sample Text",
//     "tags": "Sample Text",
//     "image": [
//         "image_1_x1f7kp.png"
//     ]
// } */}