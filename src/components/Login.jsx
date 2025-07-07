import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';
import Cart from '../components/Cart'

// Custom document title hook
function useTitle(title) {
  useEffect(() => {
    document.title = title || 'Home — Textsave App';
  }, [title]);
}

const Textsave = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [fullText, setFullText] = useState('');
  const [showTextarea, setShowTextarea] = useState(false);
  const [records, setRecords] = useState([]);

  const key = 'dDdU5D259s304vcB';

  useEffect(() => {
    axios
      .get('https://generateapi.onrender.com/api/Textsave', {
        headers: { Authorization: key },
      })
      .then(res => setRecords(res.data.Data))
      .catch(console.error);
  }, []);

  // Update browser tab title dynamically
  useTitle(showTextarea && inputText ? `Editing — ${inputText}` : 'Home — Textsave App');

  const handleInitialSubmit = values => {
    const found = records.find(
      rec => rec.inputText.trim().toLowerCase() === values.inputText.trim().toLowerCase()
    );
    setInputText(values.inputText);
    setFullText(found?.fullText || '');
    setShowTextarea(true);
  };

  const handleTextareaSubmit = (values, { resetForm }) => {
    const found = records.find(
      rec => rec.inputText.trim().toLowerCase() === values.inputText.trim().toLowerCase()
    );

    const doSave = () => {
      axios
        .post('https://generateapi.onrender.com/api/Textsave', values, {
          headers: { Authorization: key },
        })
        .then(() => {
          axios
            .get('https://generateapi.onrender.com/api/Textsave', {
              headers: { Authorization: key },
            })
            .then(res => setRecords(res.data.Data))
            .catch(console.error);

          resetForm();
          setInputText('');
          setFullText('');
          setShowTextarea(false);
          navigate('/'); // ← redirect home
        })
        .catch(console.error);
    };

    if (found?._id) {
      axios
        .delete(`https://generateapi.onrender.com/api/Textsave/${found._id}`, {
          headers: { Authorization: key },
        })
        .then(doSave)
        .catch(console.error);
    } else {
      doSave();
    }
  };

  return showTextarea ? (
    <Formik
      initialValues={{ inputText, fullText }}
      onSubmit={handleTextareaSubmit}
      enableReinitialize
    >
      {({ handleChange }) => (
        <Form>
          <Box sx={{ height: '100vh', p: 2, bgcolor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ color: 'gold', fontStyle: 'italic', mb: 1 }}>
              Editing for: <strong>{inputText}</strong>
            </Typography>
            <Field
              name="fullText"
              as={TextField}
              multiline
              fullWidth
              minRows={20}
              variant="outlined"
              placeholder="Edit your full text here..."
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Button type="submit" sx={{ background: 'gold' }}>
              Save
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  ) : (
    <Formik initialValues={{ inputText: '' }} onSubmit={handleInitialSubmit}>
      {() => (
        <Form>
          <Box sx={{ p: 2 }}>
            <Field
              name="inputText"
              as={TextField}
              placeholder="Enter text key..."
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained">
              Load / Create
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Textsave;
