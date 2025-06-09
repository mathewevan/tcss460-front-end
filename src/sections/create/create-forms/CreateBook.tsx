// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
//import { useRouter } from 'next/navigation';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import axios from '../../../utils/axios';
import { Check } from '@mui/icons-material';

// ============================|| CREATE BOOK FORM ||============================ //

export default function CreateBook() {
  //const router = useRouter();
  //const [successMessage, setSuccessMessage] = useState('');
  //const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    const payload = {
      title: values.title,
      original_title: values.original_title,
      isbn13: values.isbn13,
      original_publication_year: values.original_publication_year,
      authors: values.authors,
      image_url: values.image_url,
      small_image_url: values.small_image_url
    };

    try {
      const response = await axios.post(`/closed/books`, payload as any);

      if (response.status === 201) {
        setShowSuccess(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (showSuccess) {
    return (
      <Alert icon={<Check fontSize="inherit" />} severity="success">
        Book Added Successfully.
      </Alert>
    );
  }

  return (
    <>
      {/*{errorMessage && (*/}
      {/*  <Alert severity="error" sx={{ mb: 2 }}>*/}
      {/*    {errorMessage}*/}
      {/*  </Alert>*/}
      {/*)}*/}

      <Formik
        initialValues={{
          isbn13: '',
          title: '',
          authors: '',
          original_publication_year: '',
          original_title: '',
          image_url: '',
          small_image_url: ''
        }}
        validationSchema={Yup.object({
          isbn13: Yup.number().required('ISBN13 is required'),
          original_title: Yup.string().required('Title is required'),
          authors: Yup.string().required('Authors are required'),
          original_publication_year: Yup.number()
            .required('Publication year is required')
            .min(1000, 'Publication year must be valid')
            .max(new Date().getFullYear(), 'Publication year cannot be in the future'),
          image_url: Yup.string().required('Image URL is required'),
          small_image_url: Yup.string().required('Small Image URL is required'),
          title: Yup.string().required('Title is required')
        })}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, handleBlur, handleChange, touched, values, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="isbn13">ISBN</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.isbn13 && errors.isbn13)}
                    id="isbn13"
                    value={values.isbn13}
                    name="isbn13"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter ISBN13"
                  />
                  {touched.isbn13 && errors.isbn13 && (
                    <FormHelperText error id="standard-weight-helper-text-isbn13">
                      {errors.isbn13}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="title">Title</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.title && errors.title)}
                    id="title"
                    value={values.title}
                    name="title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter book title"
                  />
                  {touched.title && errors.title && (
                    <FormHelperText error id="standard-weight-helper-text-title">
                      {errors.title}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="authors">Authors</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.authors && errors.authors)}
                    id="authors"
                    value={values.authors}
                    name="authors"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter authors (comma separated)"
                  />
                  {touched.authors && errors.authors && (
                    <FormHelperText error id="standard-weight-helper-text-authors">
                      {errors.authors}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="original_publication_year">Publication Year</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.original_publication_year && errors.original_publication_year)}
                    id="original_publication_year"
                    value={values.original_publication_year}
                    name="original_publication_year"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter publication year"
                    type="number"
                  />
                  {touched.original_publication_year && errors.original_publication_year && (
                    <FormHelperText error id="standard-weight-helper-text-publication_year">
                      {errors.original_publication_year}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="original_title">Original Title</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.original_title && errors.original_title)}
                    id="title"
                    value={values.original_title}
                    name="original_title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter original title"
                  />
                  {touched.original_title && errors.original_title && (
                    <FormHelperText error id="standard-weight-helper-text-original_title">
                      {errors.original_title}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="image_url">Image URL</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.image_url && errors.image_url)}
                    id="image_url"
                    value={values.image_url}
                    name="image_url"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                  />
                  {touched.image_url && errors.image_url && (
                    <FormHelperText error id="standard-weight-helper-text-image_url">
                      {errors.image_url}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="small_image_url">Small Image URL</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.small_image_url && errors.small_image_url)}
                    id="small_image_url"
                    value={values.small_image_url}
                    name="small_image_url"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter small image URL"
                  />
                  {touched.small_image_url && errors.small_image_url && (
                    <FormHelperText error id="standard-weight-helper-text-small_image_url">
                      {errors.small_image_url}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation fullWidth size="large" type="submit" variant="contained" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating Book...' : 'Create Book'}
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
