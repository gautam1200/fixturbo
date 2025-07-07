// import React from 'react'


// const key = " PwkRtdydOfBZmgE2";
// function Servicess() {

//   return (
//     <>
    
//     </>
//   )
// }

// export default Servicess
import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

function Servicess() {
  const key = 'PwkRtdydOfBZmgE2';
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchServices = () => {
    axios.get('https://generateapi.onrender.com/api/service', {
      headers: { Authorization: key }
    })
    .then(res => setData(res.data.Data))
    .catch(console.error);
  }

  useEffect(fetchServices, []);

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('text', values.text);
    values.icon.forEach(file => formData.append('icon', file));
    values.image.forEach(file => formData.append('image', file));

    const request = editId
      ? axios.put(`https://generateapi.onrender.com/api/service/${editId}`, formData, { headers: { Authorization: key, 'Content-Type': 'multipart/form-data' } })
      : axios.post('https://generateapi.onrender.com/api/service', formData, { headers: { Authorization: key, 'Content-Type': 'multipart/form-data' } });

    request.then(() => {
      fetchServices();
      resetForm();
      setEditId(null);
      setOpen(false);
    }).catch(console.error);
  };

  const deleteData = id => {
    axios.delete(`https://generateapi.onrender.com/api/service/${id}`, {
      headers: { Authorization: key }
    })
    .then(fetchServices)
    .catch(console.error);
  };

  const startEdit = item => {
    setEditId(item._id);
    setOpen(true);
    // Could pref-fill form values via initialValues and enableReinitialize
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">{open ? 'Edit Service' : 'Add Service'}</Typography>

      <Formik
        key={editId} // reinitialize when editing
        initialValues={{
          title: '',
          text: '',
          icon: [],
          image: []
        }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setFieldValue, values }) => (
          <Form encType="multipart/form-data">
            <Field as={TextField} name="title" label="Title" fullWidth sx={{ mb: 2 }} />
            <Field as={TextField} name="text" label="Text" fullWidth multiline rows={3} sx={{ mb: 2 }} />

            <Typography>Icons (choose multiple)</Typography>
            <input
              name="icon"
              type="file"
              multiple
              accept="image/*"
              onChange={e => {
                setFieldValue('icon', Array.from(e.currentTarget.files));
              }}
            />

            <Typography sx={{ mt: 2 }}>Images (choose multiple)</Typography>
            <input
              name="image"
              type="file"
              multiple
              accept="image/*"
              onChange={e => {
                setFieldValue('image', Array.from(e.currentTarget.files));
              }}
            />

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              {open ? 'Update' : 'Submit'}
            </Button>
            {open && (
              <Button onClick={() => { setOpen(false); setEditId(null); }} sx={{ ml: 2, mt: 2 }}>Cancel</Button>
            )}
          </Form>
        )}
      </Formik>

      <Box sx={{ mt: 6 }}>
        <table width="100%" border="1" cellPadding="8" style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              {['Title', 'Text',  'Image', 'Delete', 'Edit'].map(h => <th key={h}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.text}</td>
                {/* <td><img src={item.icon?.[0]} alt="" width="80" color='black' /></td> */}
                <td><img src={item.image?.[0]} alt="" width="80" /></td>
                <td><Button onClick={() => deleteData(item._id)} color="error">Delete</Button></td>
                <td><Button onClick={() => startEdit(item)}>Edit</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
}

export default Servicess;



// link:' https://generateapi.onrender.com/api/service'


// "title"
// "text"
// "icon"
// "image"



