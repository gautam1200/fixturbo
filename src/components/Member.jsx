import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';

function Member() {
    const initialValues = {
        name : '',
        manager : '',
        dicription : '',
        images: [],  
    };

    const key = 'INTRfBpATLpTNI5s';

    const [team, setdata] = useState([])

    const Products = () => {
        axios.get('https://generateapi.onrender.com/api/member', {
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
        formData.append('name', values.name);
        formData.append('manager', values.manager);
        formData.append('dicription', values.dicription);
        values.images.forEach((img) => {
            formData.append('images', img);
        });

        axios
            .post('https://generateapi.onrender.com/api/member', formData, {
                headers: {
                    Authorization: key,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log('Success:', response.team);
                Products()
                resetForm();
            })
            .catch((error) => {
                console.error('Upload error:', error);
            });
    };
        const deletdata = (id) => {
        axios.delete(`https://generateapi.onrender.com/api/member/${id}`, {
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
            <Formik 
            initialValues={initialValues} 
            onSubmit={handleSubmit}>
                {({ setFieldValue }) => (
                    <Form encType="multipart/form-data">
                        <Field name="name" type="text" placeholder="name"  />
                        <Field name="manager" type="text" placeholder="manager" />
                        <Field name="dicription" type="text" placeholder="discription" />

                        <input
                            name="images"
                            type="file"
                            multiple
                            onChange={(e) => {
                                const files = Array.from(e.currentTarget.files);
                                setFieldValue('images', files);
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
                    team.map((a, index) => (
                        <>
                        <h1>{a.name}</h1>
                        {/* <h1>{a.manager}</h1> */}
                        {/* <h1>{a.dicription}</h1> */}
                        {/* <img src={a.images} alt="" width={'200px'}/> */}
                                    <button onClick={() => deletdata(a._id)}>Delete{index+1}</button>  
                        </>
                    ))}

            </Box >
        </>
    );
}

export default Member;



// https://generateapi.onrender.com/api/member


// "name"
// "manager"
// "dicription"
// "images"