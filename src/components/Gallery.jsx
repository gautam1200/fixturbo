import { Box, Button, Typography } from '@mui/material';
import Slider from "react-slick"
import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import ab from '../Images/work6.png'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Gallery() {
    const initialValues = {
        image: [],
    };


    const key = 'J0qXPNCpYKFocI8Z'

    const [data, setdata] = useState([])

    const Gallerys = () => {
        axios.get('https://generateapi.onrender.com/api/gallery', {
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
        Gallerys()
    }, [])
    const handleSubmit = (values, { resetForm }) => {
        const formData = new FormData();

        values.image.forEach((img) => {
            formData.append('image', img);
        });

        axios
            .post('https://generateapi.onrender.com/api/gallery', formData, {
                headers: {
                    Authorization: key,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log('Success:', response.data);
                // Gallerys()
                resetForm();
            })
            .catch((error) => {
                console.error('Upload error:', error);
            });
    };

    const deletdata = (id) => {
        axios.delete(`https://generateapi.onrender.com/api/gallery/${id}`, {
            headers: {
                Authorization: key,
                'Content-Type': 'multipart/form-data'
            },
        })
            .then((res) => {
                console.log("hello");
                Gallerys()
            })
            .catch((error) => {
                console.log(error);
            })  
    }
    return (
        <>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                {({ setFieldValue }) => (
                    <Form encType="multipart/form-data">
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
                width: '300px',
                overflow: 'hidden'    
            }}>
                {
                    data.map((a, index) => (
                        <>
                            <img src={a.image} alt="" width={'100%'} />
                            <button onClick={() => deletdata(a._id)}>Delete{index + 1}</button>
                        </>
                    ))}

            </Box >


           
        </>
    )
}

export default Gallery




// J0qXPNCpYKFocI8Z


// https://generateapi.onrender.com/api/gallery