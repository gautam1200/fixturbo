// import { Box, Button, CircularProgress, InputLabel, TextField, Typography } from '@mui/material';
// import axios from 'axios';
// import { Field, Form, Formik } from 'formik';
// import React, { useEffect, useState } from 'react';

// function Cart() {
//   const initialValues = {
//     title: '',
//     price: '',
//     cutofprice: '',
//     rating: '',
//     ratingcount: '',
//     discription: '',
//     sku: '',
//     category: '',
//     tags: '',
//     image: [],
//   };

//   const key = 'NpBEIMw8WujB8YXy';
//   const [data, setData] = useState([]);

//   const fetchProducts = () => {
//     axios.get('https://generateapi.onrender.com/api/cart', {
//       headers: { Authorization: key },
//     })
//       .then((res) => setData(res.data.Data))
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);


//   const handleSubmit = (values, { resetForm, setSubmitting }) => {
//     const formData = new FormData();
//     Object.entries(values).forEach(([key, value]) => {
//       if (key !== 'image') {
//         formData.append(key, value);
//       }
//     });
//     values.image.forEach((img) => {
//       formData.append('image', img);
//     });

//     axios.post('https://generateapi.onrender.com/api/cart', formData, {
//       headers: {
//         Authorization: key,
//         'Content-Type': 'multipart/form-data',
//       },
//     })
//       .then(() => {
//         fetchProducts();
//         resetForm();
//       })
//       .catch((error) => console.error('Upload error:', error))
//       .finally(() => setSubmitting(false));
//   };

//   const handleDelete = (id) => {
//     axios.delete(`https://generateapi.onrender.com/api/cart/${id}`, {
//       headers: {
//         Authorization: key,
//         'Content-Type': 'multipart/form-data',
//       },
//     })
//       .then(() => fetchProducts())
//       .catch((error) => console.error(error));
//   };

//   return (
//     <>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         {({ setFieldValue, isSubmitting, errors, touched }) => (
//           <Form encType="multipart/form-data">
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//               <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                 <Box sx={{ flex: 1 }}>
//                   <Field
//                     as={TextField}
//                     name="title"
//                     label="Product Title"
//                     fullWidth
//                     error={touched.title && Boolean(errors.title)}
//                     helperText={touched.title && errors.title}
//                   />
//                 </Box>
//                 <Box sx={{ flex: 1 }}>
//                   <Field
//                     as={TextField}
//                     name="price"
//                     label="Price"
//                     type="number"
//                     fullWidth
//                     error={touched.price && Boolean(errors.price)}
//                     helperText={touched.price && errors.price}
//                   />
//                 </Box>
//               </Box>
//               <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                 <Box sx={{ flex: 1 }}>
//                   <Field
//                     as={TextField}
//                     name="cutofprice"
//                     label="Cut-off Price"
//                     type="number"
//                     fullWidth
//                     error={touched.cutofprice && Boolean(errors.cutofprice)}
//                     helperText={touched.cutofprice && errors.cutofprice}
//                   />
//                 </Box>
//                 <Box sx={{ flex: 1 }}>
//                   <Field
//                     as={TextField}
//                     name="rating"
//                     label="Rating"
//                     type="number"
//                     fullWidth
//                     error={touched.rating && Boolean(errors.rating)}
//                     helperText={touched.rating && errors.rating}
//                   />
//                 </Box>
//               </Box>
//               <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                 <Box sx={{ flex: 1 }}>
//                   <Field
//                     as={TextField}
//                     name="ratingcount"
//                     label="Rating Count"
//                     type="number"
//                     fullWidth
//                     error={touched.ratingcount && Boolean(errors.ratingcount)}
//                     helperText={touched.ratingcount && errors.ratingcount}
//                   />
//                 </Box>
//                 <Box sx={{ flex: 1 }}>
//                   <Field
//                     as={TextField}
//                     name="description"
//                     label="Description"
//                     fullWidth
//                     error={touched.description && Boolean(errors.description)}
//                     helperText={touched.description && errors.description}
//                   />
//                 </Box>
//               </Box>
//               <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                 <Box sx={{ flex: 1 }}>
//                   <Field
//                     as={TextField}
//                     name="sku"
//                     label="SKU"
//                     fullWidth
//                     error={touched.sku && Boolean(errors.sku)}
//                     helperText={touched.sku && errors.sku}
//                   />
//                 </Box>
//                 <Box sx={{ flex: 1 }}>
//                   <Field
//                     as={TextField}
//                     name="category"
//                     label="Category"
//                     fullWidth
//                     error={touched.category && Boolean(errors.category)}
//                     helperText={touched.category && errors.category}
//                   />
//                 </Box>
//               </Box>
//               <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                 <Box sx={{ flex: 2 }}>
//                   <Field
//                     as={TextField}
//                     name="tags"
//                     label="Tags"
//                     fullWidth
//                     error={touched.tags && Boolean(errors.tags)}
//                     helperText={touched.tags && errors.tags}
//                   />
//                 </Box>
//                 <Box sx={{ flex: 1 }}>
//                   <InputLabel htmlFor="image">Product Images</InputLabel>
//                   <input
//                     id="image"
//                     name="image"
//                     type="file"
//                     accept="image/*"
//                     multiple
//                     onChange={(e) => setFieldValue('image', e.currentTarget.files)}
//                   />
//                 </Box>
//               </Box>
//               <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                 <button type="submit">Submit</button>
//               </Box>
//             </Box>
//           </Form>
//         )}
//       </Formik>


//       <Box sx={{
//         width: '100%',
//       }}>
//         {
//           data.map((a, index) => (
//             <>
//               <button onClick={() => handleDelete(a._id)}>Delete{index + 1}</button>
//             </>
//           ))}
//       </Box >


//     </>
//   );
// }

// export default Cart;



// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
// import axios from 'axios';
// import { Field, Form, Formik } from 'formik';
// import CloseIcon from '@mui/icons-material/Close';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));



// function Servicess() {
//   const initialValues = {
//     title: '',
//     price: '',
//     cutofprice: '',
//     rating: '',
//     ratingcount: '',
//     discription: '',
//     sku: '',
//     category: '',
//     tags: '',
//     image: [],
//   };

//   const key = ' NpBEIMw8WujB8YXy';

//   const [data, setdata] = React.useState([])
//   const [edit, setedit] = React.useState(null)
//   const [file, setfile] = React.useState(null)
//   const Products = () => {
//     axios.get('https://generateapi.onrender.com/api/cart', {
//       headers: {
//         Authorization: key,
//       }
//     })
//       .then((res) => {
//         console.log("hyy");
//         setdata(res.data.Data)

//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }
//   React.useEffect(() => {
//     Products()
//   }, [])

//   const handleSubmit = (values, { resetForm }) => {
//     const formData = new FormData();
//     Object.entries(values).forEach(([key, value]) => {
//       if (key !== 'image') {
//         formData.append(key, value);
//       }
//     });



//     values.image.forEach((img) => {
//       formData.append('image', img);
//     });

//     if (edit) {
//       axios.patch(`https://generateapi.onrender.com/api/cart/${edit}`, formData, {
//         headers: {
//           Authorization: key
//         }
//       })
//         .then((Response) => {
//           console.log(Response.data);
//           Products()
//           initialValues({
//             title: '',
//             price: '',
//             cutofprice: '',
//             rating: '',
//             ratingcount: '',
//             discription: '',
//             sku: '',
//             category: '',
//             tags: '',
//             image: [],
//           })

//         })
//         .catch((error) => {
//           alert("hello")
//         })
//     } else
//       axios.post('https://generateapi.onrender.com/api/cart', formData, {
//         headers: {
//           Authorization: key,
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//         .then((response) => {
//           console.log('Success:', response.data);
//           Products()
//           resetForm();
//         })
//         .catch((error) => {
//           console.error('Upload error:', error);
//         });
//   };
//   const deletdata = (id) => {
//     axios.delete(`https://generateapi.onrender.com/api/cart/${id}`, {
//       headers: {
//         Authorization: key,
//         'Content-Type': 'multipart/form-data'
//       },
//     })
//       .then((res) => {
//         console.log("hello");
//         Products()
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   const editdata = (item) => {
//     initialValues({
//       Name: item.Name,
//       Surname: item.Surname,
//       Email: item.Email,
//       Number: item.Number,
//       Description: item.Description,
//       Profileimg: item.Profileimg
//     })
//     setedit(item._id)
//     setfile(item.Profileimg)
//   }


//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };



//   return (
//     <>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//         }}>
//         <React.Fragment>
//           <Button variant="outlined" onClick={handleClickOpen}
//             sx={{
//               color: 'black',
//               backgroundColor: 'white',
//               padding: '10px 40px',
//               fontSize: '16px',
//               border: '1px solid black',
//               marginRight: '15px',
//               fontSize: '20px',
//               fontFamily: 'math',
//               fontWeight: 'bold',
//               "&:hover": {
//                 backgroundColor: "red",
//                 color: 'black',
//                 border: '1px solid red',
//               }
//             }}
//           >
//             Add item
//           </Button>
//           <BootstrapDialog
//             onClose={handleClose}
//             aria-labelledby="customized-dialog-title"
//             open={open}
//           >
//             <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//               Item Details
//             </DialogTitle>
//             <IconButton
//               aria-label="close"
//               onClick={handleClose}
//               sx={(theme) => ({
//                 position: 'absolute',
//                 right: 8,
//                 top: 8,
//                 color: theme.palette.grey[500],
//               })}
//             >
//               <CloseIcon />
//             </IconButton>
//             <DialogContent dividers>
//               <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//                 {({ setFieldValue }) => (
//                   <Form encType="multipart/form-data">
//                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

//                       <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="title" label="Product Title" fullWidth />
//                         </Box>
//                       </Box>
//                       <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="price" type="number" label="price" fullWidth />
//                         </Box>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="cutofprice" type="number" label="cutofprice" fullWidth />
//                         </Box>
//                       </Box>
//                       <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="rating" type="number" label="rating" fullWidth />
//                         </Box>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="ratingcount" type="number" label="ratingcount" fullWidth />
//                         </Box>
//                       </Box>
//                       <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="discription" type="text" label="discription" fullWidth />
//                         </Box>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="sku" type="text" label="sku" fullWidth />
//                         </Box>
//                       </Box>
//                       <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, boxSizing: 'border-box' }}>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="category" type="text" label="category" fullWidth />
//                         </Box>
//                         <Box sx={{ flex: 1 }}>
//                           <Field as={TextField} name="tags" type="text" label="tags" fullWidth />
//                         </Box>
//                       </Box>
//                       <input
//                         name="image"
//                         type="file"
//                         multiple
//                         onChange={(e) => {
//                           const files = Array.from(e.currentTarget.files);
//                           setFieldValue('image', files);
//                         }}
//                       />
//                     </Box>
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         marginTop: '16px '
//                       }}>


//                       <Button onClick={handleClose} type="submit"
//                         sx={{
//                           color: 'black',
//                           backgroundColor: 'white',
//                           padding: { xs: '10px 15px', sm: '10px 15px', lg: '15px 25px' },
//                           fontSize: '16px',
//                           border: '1px solid black',
//                           marginRight: '15px',
//                           fontSize: { xs: '14px', sm: '16px' },
//                           "&:hover": {
//                             backgroundColor: "red",
//                             color: 'black',
//                             border: '1px solid red',
//                           }

//                         }}>LEARN ABOUT US</Button>
//                     </Box>
//                   </Form>
//                 )}
//               </Formik>
//             </DialogContent>
//           </BootstrapDialog>
//         </React.Fragment>
//       </Box>

//       <Box sx={{
//         width: '100%',
//         margin: '50px 0',
//         padding: '0'
//       }}>

//         <table border="1"
//           cellSpacing="6"
//           bgcolor="white"
//           width={"100%"}
//           style={{ textAlign: "center" }}>
//           <tr >
//             <th>Image</th>
//             <th>Price</th>
//             <th>Cutofprice</th>
//             <th>Reting</th>
//             <th>Retingcount</th>
//             <th >discription</th>
//             <th>Sku</th>
//             <th>Category</th>
//             <th>Tags</th>
//             <th>Image</th>
//             <th>Delete</th>
//             <th>Update</th>
//           </tr>
//           {
//             data.map((b, index) => (
//               <>
//                 <tr>
//                   <td>{b.title}</td>
//                   <td>{b.price}</td>
//                   <td>{b.cutofprice}</td>
//                   <td>{b.rating}</td>
//                   <td>{b.ratingcount}</td>
//                   <td style={{ padding: 0, verticalAlign: 'top' }}>
//                     <div
//                       style={{
//                         height: '100px',
//                         overflowX: 'hidden',
//                         boxSizing: 'border-box',
//                       }}
//                     >
//                       {b.discription}
//                     </div>
//                   </td>
//                   <td>{b.sku}</td>
//                   <td>{b.category}</td>
//                   <td>{b.tags}</td>
//                   <td><img src={b.image} alt="" width={'100px'} /></td>
//                   <td><Button onClick={() => deletdata(b._id)}>Delete{index + 1}</Button></td>
//                   <td><Button onClick={() => editdata(b)} color='primary'>UPDATE</Button></td>
//                 </tr>
//               </>
//             ))}
//         </table>
//       </Box >

//     </>
//   );
// }

// export default Servicess;



import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {
  Box, Dialog, DialogActions, DialogContent,
  DialogTitle, IconButton, TextField, Typography
} from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': { padding: theme.spacing(2) },
  '& .MuiDialogActions-root': { padding: theme.spacing(1) },
}));

function Servicess() {
  const initialValues = {
    title: '', price: '', cutofprice: '', rating: '',
    ratingcount: '', discription: '', sku: '',
    category: '', tags: '', image: [],
  };
  const key = 'NpBEIMw8WujB8YXy';
  const [data, setData] = React.useState([]);
  const [editId, setEditId] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const fetchProducts = () => {
    axios.get('https://generateapi.onrender.com/api/cart', {
      headers: { Authorization: key }
    })
    .then(res => setData(res.data.Data))
    .catch(console.error);
  };

  React.useEffect(fetchProducts, []);

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    Object.entries(values).forEach(([k, v]) => {
      if (k !== 'image') formData.append(k, v);
    });
    values.image.forEach(img => formData.append('image', img));

    const request = editId
      ? axios.patch(`https://generateapi.onrender.com/api/cart/${editId}`, formData, { headers: { Authorization: key } })
      : axios.post('https://generateapi.onrender.com/api/cart', formData, { headers: { Authorization: key, 'Content-Type': 'multipart/form-data' } });

    request
      .then(res => {
        fetchProducts();
        resetForm();
        setEditId(null);
        setOpen(false);
      })
      .catch(console.error);
  };

  const deleteData = id => {
    axios.delete(`https://generateapi.onrender.com/api/cart/${id}`, {
      headers: { Authorization: key }
    })
    .then(fetchProducts)
    .catch(console.error);
  };

  const editData = item => {
    setEditId(item._id);
    setOpen(true);
    // Formik will populate through render props setValues
    // We'll pass `initialValues` and set from parent in Formik
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="outlined" onClick={() => { setOpen(true); setEditId(null); }}>
          Add item
        </Button>
      </Box>

      <BootstrapDialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {editId ? 'Edit Item' : 'Add Item'}
          <IconButton
            aria-label="close" onClick={() => setOpen(false)}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, setValues, values }) => {
              // Populate form when editing
              if (editId && data.length) {
                const item = data.find(i => i._id === editId);
                if (item && item.title !== values.title) {
                  setValues({
                    title: item.title, price: item.price,
                    cutofprice: item.cutofprice, rating: item.rating,
                    ratingcount: item.ratingcount, discription: item.discription,
                    sku: item.sku, category: item.category,
                    tags: item.tags, image: [], // new upload if needed
                  });
                }
              }

              return (
                <Form encType="multipart/form-data">
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {['title','price','cutofprice','rating','ratingcount','discription','sku','category','tags']
                      .map(name => (
                        <Field key={name}
                          as={TextField}
                          name={name}
                          label={name.charAt(0).toUpperCase() + name.slice(1)}
                          fullWidth
                          type={['price','cutofprice','rating','ratingcount'].includes(name) ? 'number' : 'text'}
                        />
                      ))
                    }
                    <input
                      type="file" name="image" multiple
                      onChange={e => setFieldValue('image', Array.from(e.target.files))}
                    />
                  </Box>

                  <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type="submit">{editId ? 'Save Changes' : 'Add Item'}</Button>
                  </DialogActions>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </BootstrapDialog>

      <Box sx={{ width: '100%', margin: '50px 0' }}>
        <table border="1" cellSpacing="6" width="100%" style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              {['Title','Price','Cutoff Price','Rating','Rating Count','Description','SKU','Category','Tags','Image','Delete','Update']
                .map(h => <th key={h}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((b, i) => (
              <tr key={b._id}>
                <td>{b.title}</td>
                <td>{b.price}</td>
                <td>{b.cutofprice}</td>
                <td>{b.rating}</td>
                <td>{b.ratingcount}</td>
                <td style={{ padding: 0, verticalAlign: 'top' }}>
                  <div style={{
                    height: '70px',
                    overflowY: 'auto',
                    boxSizing: 'border-box',
                  }}>
                    {b.discription}
                  </div>
                </td>
                <td>{b.sku}</td>
                <td>{b.category}</td>
                <td>{b.tags}</td>
                <td>
                  <img src={b.image?.[0] || b.image} alt="" width="80px" />
                </td>
                <td>
                  <Button onClick={() => deleteData(b._id)}>Delete</Button>
                </td>
                <td>
                  <Button onClick={() => editData(b)}>Update</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
}

export default Servicess;

