
import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, TextField, Dialog, DialogTitle, IconButton, DialogContent, DialogActions } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

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
  const initialValues = {
    title: '', text: '', icon: [], image: []
  };

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

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
 
  }));

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="outlined" onClick={() => { setOpen(true); setEditId(null); }}>
          Add services
        </Button>
      </Box>


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
                        title: item.title,
                        text: item.text,

                      });
                    }
                  }

                  return (
                    <Form encType="multipart/form-data">
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {['title', 'text']
                          .map(name => (
                            <Field key={name}
                              as={TextField}
                              name={name}
                              label={name.charAt(0).toUpperCase() + name.slice(1)}
                              fullWidth
                              type={['price', 'cutofprice',].includes(name) ? 'number' : 'text'}
                            />
                          ))
                        }
                        <input
                          name="icon"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={e => {
                            setFieldValue('icon', Array.from(e.currentTarget.files));
                          }}
                        />
                        <input
                          type="file" name="image" multiple
                          onChange={e => setFieldValue('image', Array.from(e.target.files))}
                        />
                      </Box>

                      <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit">{editId ? 'Save Changes' : 'Add services'}</Button>

                      </DialogActions>
                    </Form>
                  );
                }}
              </Formik>
            </DialogContent>
          </BootstrapDialog>
        )}
      </Formik>

      <Box sx={{ mt: 6 }}>
        <table width="100%" border="1" cellPadding="8" style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              {['Title', 'Text', 'Image', 'Delete', 'Edit'].map(h => <th key={h}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.text}</td>
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



