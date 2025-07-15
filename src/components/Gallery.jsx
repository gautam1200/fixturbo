import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

function Gallery() {
  const [initialValues, setInitialValues] = useState({ image: [] });
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [preview, setPreview] = useState([]);
  const key = 'J0qXPNCpYKFocI8Z';

  const fetchGallery = () => {
    axios
      .get('https://generateapi.onrender.com/api/gallery', {
        headers: { Authorization: key },
      })
      .then((res) => {
        setData(res.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    values.image.forEach((img) => {
      formData.append('image', img);
    });

    const apiCall = edit
      ? axios.patch(
          `https://generateapi.onrender.com/api/gallery/${edit}`,
          formData,
          { headers: { Authorization: key } }
        )
      : axios.post('https://generateapi.onrender.com/api/gallery', formData, {
          headers: {
            Authorization: key,
            'Content-Type': 'multipart/form-data',
          },
        });

    apiCall
      .then((response) => {
        resetForm();
        setInitialValues({ image: [] });
        setEdit(null);
        setOpen(false);
        fetchGallery();
        setPreview([]);
      })
      .catch((error) => {
        console.error('Error uploading:', error);
      });
  };

  const deleteImage = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/gallery/${id}`, {
        headers: {
          Authorization: key,
        },
      })
      .then(() => {
        fetchGallery();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editImage = (item) => {
    setEdit(item._id);
    setOpen(true);
    setInitialValues({ image: [] }); // Do not try to use item.image directly
  };

  const BootstrapDialog = styled(Dialog)(() => ({}));

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true);
            setEdit(null);
            setInitialValues({ image: [] });
            setPreview([]);
          }}
        >
          Add image
        </Button>
      </Box>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, resetForm }) => (
          <BootstrapDialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>
              {edit ? 'Edit Item' : 'Add Item'}
              <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{ position: 'absolute', top: 8, right: 8 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <Form encType="multipart/form-data">
              <DialogContent dividers>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <input
                    name="image"
                    type="file"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.currentTarget.files);
                      setFieldValue('image', files);
                      setPreview(
                        files.map((file) => URL.createObjectURL(file))
                      );
                    }}
                  />
                  {preview.length > 0 && (
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {preview.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`preview-${i}`}
                          width="80"
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit">
                  {edit ? 'Save Changes' : 'Add Image'}
                </Button>
              </DialogActions>
            </Form>
          </BootstrapDialog>
        )}
      </Formik>

      <table border={1} style={{ margin: '20px auto'}}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a, index) => (
            <tr key={a._id}>
              <td style={{ width: '80px',padding:'3px'}}>
                <img src={a.image} alt={`gallery-${index}`} width={'100%'} />
              </td>
              <td>
                <Button onClick={() => deleteImage(a._id)}>Delete</Button>
              </td>
              <td>
                <Button onClick={() => editImage(a)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Gallery;
