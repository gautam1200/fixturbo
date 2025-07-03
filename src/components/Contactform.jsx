// import axios from 'axios';
// import { Field, Formik } from 'formik';
// import React, { useEffect, useState } from 'react'
// import { Form } from 'react-router-dom';

// function Contactform() {
    
//     const initialValues = {
//         name:'',
//         email:'',
//         number:'',
//         massage: '',
//     };
    
//     const key = 'oB6sxtvw7jhP34m9'
    
//         const [data, setdata] = useState([])
    
//         const Products = () => {
//             axios.get('https://generateapi.onrender.com/api/form', {
//                 headers: {
//                     Authorization: key,
//                 }
//             })
//                 .then((res) => {
//                     console.log("hyy");
//                     setdata(res.data.Data)
    
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         }
//         useEffect(() => {
//             Products()
//         }, [])
    
//         const handleSubmit = (values, { resetForm }) => {
//             const formData = new FormData();
//             formData.append('name', values.name);
//             formData.append('email', values.email);
//             formData.append('number', values.number);
//             formData.append('massage', values.massage);
//             axios
//                 .post('https://generateapi.onrender.com/api/form', formData, {
//                     headers: {
//                         Authorization: key,
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 })
//                 .then((response) => {
//                     console.log('Success:', response.data);
//                     Products()
//                     resetForm();
//                 })
//                 .catch((error) => {
//                     console.error('Upload error:', error);
//                 });
//         };
//             const deletdata = (id) => {
//             axios.delete(`https://generateapi.onrender.com/api/form/${id}`, {
//                 headers: {
//                     Authorization: key,
//                     'Content-Type': 'multipart/form-data'
//                 },
//             })
//                 .then((res) => {
//                     console.log("hello");
//                     Products()
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         }

//     return (
//         <>
//             <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//                 {({ setFieldValue }) => (
//                     <Form encType="multipart/form-data">
//                         <Field name="name" type="text" placeholder="Name" />
//                         <Field name="email" type="text" placeholder="email" />
//                         <Field name="number" type="text" placeholder="Number" />
//                         <Field name="massage" type="text" placeholder="Message" />

//                         <button type="submit">Submit</button>

//                     </Form>
//                 )}
//             </Formik>

//             {
//                     data.map((b, index) => (
//                         <>
//                         <h1>{data.name}</h1>
//                         <h1>{data.email}</h1>
//                         <h1>{data.number}</h1>
//                         <h1>{data.massage}</h1>
//                                     <button onClick={() => deletdata(b._id)}>Delete{index+1}</button>  
//                         </>
//                     ))}


//         </>
//     )
// }

// export default Contactform


// https://generateapi.onrender.com/api/form




import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';

function Contactform() {
    const initialValues = {
        name:'',
        email:'',
        number:'',
        massage: '',
    };

    const key = ' oB6sxtvw7jhP34m9';

    const [data, setdata] = useState([])

    const Products = () => {
        axios.get('https://generateapi.onrender.com/api/form', {
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
        formData.append('email', values.email);
        formData.append('number', values.number);
        formData.append('massage', values.massage);

        axios
            .post('https://generateapi.onrender.com/api/form', formData, {
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
        axios.delete(`https://generateapi.onrender.com/api/form/${id}`, {
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
                        <Field name="name" type="text" placeholder="name"  />
                        <Field name="email" type="text" placeholder="email"  />
                        <Field name="number" type="text" placeholder="Number"  />
                        <Field name="massage" type="text" placeholder="Message"  />
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
                        <h1>{b.name}</h1>
                        <h1>{b.email}</h1>
                        <h1>{b.number}</h1>
                        <h1>{b.massage}</h1>
                                    <button onClick={() => deletdata(b._id)}>Delete{index+1}</button>  
                        </>
                    ))}

            </Box >
        </>
    );
}

export default Contactform;