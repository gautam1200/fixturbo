 import { Box, Button, CircularProgress, InputLabel, TextField, Typography } from '@mui/material';
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
    image: [],
};

const key = 'NpBEIMw8WujB8YXy';
  const [data, setData] = useState([]);
  
  const fetchProducts = () => {
      axios.get('https://generateapi.onrender.com/api/cart', {
          headers: { Authorization: key },
        })
        .then((res) => setData(res.data.Data))
        .catch((error) => console.error(error));
    };
    
    useEffect(() => {
        fetchProducts();
    }, []);
    

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key !== 'image') {
        formData.append(key, value);
      }
    });
    values.image.forEach((img) => formData.append('image', img));

    axios.post('https://generateapi.onrender.com/api/cart', formData, {
      headers: {
        Authorization: key,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => {
      fetchProducts();
      resetForm();
    })
    .catch((error) => console.error('Upload error:', error))
    .finally(() => setSubmitting(false));
  };

  const handleDelete = (id) => {
    axios.delete(`https://generateapi.onrender.com/api/cart/${id}`, {
      headers: {
        Authorization: key,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => fetchProducts())
    .catch((error) => console.error(error));
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, isSubmitting, errors, touched }) => (
          <Form encType="multipart/form-data">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Field
                    as={TextField}
                    name="title"
                    label="Product Title"
                    fullWidth
                    error={touched.title && Boolean(errors.title)}
                    helperText={touched.title && errors.title}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Field
                    as={TextField}
                    name="price"
                    label="Price"
                    type="number"
                    fullWidth
                    error={touched.price && Boolean(errors.price)}
                    helperText={touched.price && errors.price}
                  />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Field
                    as={TextField}
                    name="cutofprice"
                    label="Cut-off Price"
                    type="number"
                    fullWidth
                    error={touched.cutofprice && Boolean(errors.cutofprice)}
                    helperText={touched.cutofprice && errors.cutofprice}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Field
                    as={TextField}
                    name="rating"
                    label="Rating"
                    type="number"
                    fullWidth
                    error={touched.rating && Boolean(errors.rating)}
                    helperText={touched.rating && errors.rating}
                  />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Field
                    as={TextField}
                    name="ratingcount"
                    label="Rating Count"
                    type="number"
                    fullWidth
                    error={touched.ratingcount && Boolean(errors.ratingcount)}
                    helperText={touched.ratingcount && errors.ratingcount}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Field
                    as={TextField}
                    name="description"
                    label="Description"
                    fullWidth
                    error={touched.description && Boolean(errors.description)}
                    helperText={touched.description && errors.description}
                  />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Field
                    as={TextField}
                    name="sku"
                    label="SKU"
                    fullWidth
                    error={touched.sku && Boolean(errors.sku)}
                    helperText={touched.sku && errors.sku}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Field
                    as={TextField}
                    name="category"
                    label="Category"
                    fullWidth
                    error={touched.category && Boolean(errors.category)}
                    helperText={touched.category && errors.category}
                  />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box sx={{ flex: 2 }}>
                  <Field
                    as={TextField}
                    name="tags"
                    label="Tags"
                    fullWidth
                    error={touched.tags && Boolean(errors.tags)}
                    helperText={touched.tags && errors.tags}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <InputLabel htmlFor="image">Product Images</InputLabel>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => setFieldValue('image', e.currentTarget.files)}
                    />
                    </Box>
                </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>

      
            {/* <Box sx={{
                width: '100%',
            }}>
                {
                    data.map((a, index) => (
                        <>
                                    <button onClick={() => deletdata(a._id)}>Delete{index+1}</button>  
                        </>
                    ))}
            </Box > */}
        </>
    );
}

export default Cart;