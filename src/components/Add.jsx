// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Formik, Form, Field } from 'formik';
// import { TextField, Typography, Button, Box, Card } from '@mui/material';
// import axios from 'axios';

// const Add = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (values, actions) => {
//     try {
//       await axios.post(
//         'https://interviewback-ucb4.onrender.com/admin/login',
//         values
//       );
//       console.log('success');
//       actions.resetForm();
//       navigate('/home');
//     } catch (err) {
//       console.error('error', err);
//       actions.setSubmitting(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//       }}
//     >
//       <Card
//         sx={{
//           minHeight: '300px',
//           width: { lg: 380, md: 380, sm: 380, xs: 280 },
//           border: '3px solid #0288d1',
//           borderRadius: '25px',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
//         }}
//       >
//         <Box
//           sx={{
//             p: { lg: '25px', md: '20px', sm: '10px', xs: '10px' },
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Typography variant="h4" sx={{ color: '#0288d1', fontWeight: 700 }}>
//             Admin Panel
//           </Typography>

//           <Formik
//             initialValues={{ email: '', password: '' }}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     mt: 2,
//                   }}
//                 >
//                   <Field
//                     as={TextField}
//                     name="email"
//                     placeholder="Email"
//                     fullWidth
//                     sx={{ maxWidth: 330 }}
//                   />
//                   <Field
//                     as={TextField}
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     fullWidth
//                     sx={{ maxWidth: 330, mt: 2 }}
//                   />
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     disabled={isSubmitting}
//                     sx={{
//                       mt: 2,
//                       width: { xs: 200, sm: 330 },
//                       background: 'linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)',
//                       fontWeight: 600,
//                     }}
//                   >
//                     {isSubmitting ? 'Submitting...' : 'Submit'}
//                   </Button>
//                 </Box>
//               </Form>
//             )}
//           </Formik>
//         </Box>
//       </Card>
//     </Box>
//   );
// };

// export default Add;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { TextField, Typography, Button, Box, Card } from '@mui/material';
import axios from 'axios';

const Add = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values, actions) => {
        try {
            const res = await axios.post(
                'https://interviewback-ucb4.onrender.com/admin/login',
                values
            );
            console.log('success', res.data);
            actions.resetForm();
            navigate('/adminpenal');
        } catch (err) {
            console.error('error', err);
            actions.setSubmitting(false);
            navigate('/home')
        }
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
        }}>
            <Card sx={{
                minHeight: '300px',
                width: { lg: 380, md: 380, sm: 380, xs: 280 },
                border: '3px solid #0288d1',
                borderRadius: '25px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            }}>
                <Box sx={{
                    p: { lg: '25px', md: '20px', sm: '10px', xs: '10px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Typography variant="h4" sx={{ color: '#0288d1', fontWeight: 700 }}>
                        Welcome To Fixturbo
                    </Typography>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                                    <Field as={TextField} name="email" placeholder="Email" fullWidth sx={{ maxWidth: 330 }} />
                                    
                                    <Field as={TextField} type="password" name="password" placeholder="Password" fullWidth sx={{ maxWidth: 330, mt: 2 }} />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={isSubmitting}
                                        sx={{
                                            mt: 2,
                                            width: { xs: 200, sm: 330 },
                                            background: 'linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)',
                                            fontWeight: 600,
                                        }}
                                    >   
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Card>
        </Box>
    );
};

export default Add;
