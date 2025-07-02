// import React from 'react'


// const key = " PwkRtdydOfBZmgE2";
// function Servicess() {

//   return (
//     <>
    
//     </>
//   )
// }

// export default Servicess

import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';

function Servicess() {
    const initialValues = {
        title:'',
        text:'',
        icon:[],
        image: [],
    };

    const key = ' PwkRtdydOfBZmgE2';

    const [data, setdata] = useState([])

    const Products = () => {
        axios.get('https://generateapi.onrender.com/api/service', {
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
        formData.append('text', values.text);
        values.icon.forEach((icon) => {
            formData.append('icon', icon);
        });
        

        values.image.forEach((img) => {
            formData.append('image', img);
        });

        axios
            .post('https://generateapi.onrender.com/api/service', formData, {
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
        axios.delete(`https://generateapi.onrender.com/api/service/${id}`, {
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
                        <Field name="text" type="text" placeholder="Text"  />
                        <input
                            name="icon"
                            type="file"
                            onChange={(e) => {
                                const files = Array.from(e.currentTarget.files);
                                setFieldValue('icon', files);
                            }}></input>

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
                    data.map((b, index) => (
                        <>
                        <h1>{b.title}</h1>
                        <h1>{b.text}</h1>
                        <img src={b.icon} alt="" width={'200px'} />
                        <img src={b.image} alt="" width={'200px'} />
                                    <button onClick={() => deletdata(b._id)}>Delete{index+1}</button>  
                        </>
                    ))}

            </Box >
        </>
    );
}

export default Servicess;


// link:' https://generateapi.onrender.com/api/service'


// "title"
// "text"
// "icon"
// "image"



