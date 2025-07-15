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

function Ad() {
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
                    {['title', 'price', 'cutofprice', 'rating', 'ratingcount', 'discription', 'sku', 'category', 'tags']
                      .map(name => (
                        <Field key={name}
                          as={TextField}
                          name={name}
                          label={name.charAt(0).toUpperCase() + name.slice(1)}
                          fullWidth
                          type={['price', 'cutofprice', 'rating', 'ratingcount'].includes(name) ? 'number' : 'text'}
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
              {['Title', 'Price', 'Cutoff Price', 'Rating', 'Rating Count', 'Description', 'SKU', 'Category', 'Tags', 'Image', 'Delete', 'Update']
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
                    height: '200px',
                    overflowY: 'auto',
                    boxSizing: 'border-box',
                    padding: '4px',
                  }}>
                    {b.discription}
                  </div>
                </td>
                <td>{b.sku}</td>
                <td>{b.category}</td>
                <td>{b.tags}</td>
                <td>
                  <img src={b.image?.[0] || b.image} alt="" width="100px" />
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

export default Ad;






