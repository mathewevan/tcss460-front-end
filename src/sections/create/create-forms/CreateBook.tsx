'use client';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { useRouter } from 'next/navigation';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import React from 'react';
import Stack from '@mui/material/Stack';

// ============================|| CREATE BOOK FORM ||============================ //

export default function CreateBook() {
  const router = useRouter();

  const handleSubmit = async (values: any, { resetForm, setSubmitting }: any) => {
    try {
      const response = await fetch('https://lwazi71.github.io/Web_API_Phase2_TCSS460/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isbn: values.isbn,
          title: values.title,
          authors: values.authors,
          publication_year: parseInt(values.publication_year),
          publisher: values.publisher,
          page_count: parseInt(values.page_count),
          average_rating: parseFloat(values.average_rating)
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Book created successfully:', result);
        resetForm();
        // Optionally redirect to the books list or show success message
        router.push('/books');
      } else {
        console.error('Failed to create book:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating book:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        isbn: '',
        title: '',
        authors: '',
        publication_year: '',
        publisher: '',
        page_count: '',
        average_rating: ''
      }}
      validationSchema={Yup.object({
        isbn: Yup.string().required('ISBN is required'),
        title: Yup.string().required('Title is required'),
        authors: Yup.string().required('Authors are required'),
        publication_year: Yup.number()
          .required('Publication year is required')
          .min(1000, 'Publication year must be valid')
          .max(new Date().getFullYear(), 'Publication year cannot be in the future'),
        publisher: Yup.string().required('Publisher is required'),
        page_count: Yup.number()
          .required('Page count is required')
          .min(1, 'Page count must be at least 1'),
        average_rating: Yup.number()
          .required('Average rating is required')
          .min(0, 'Rating must be 0 or higher')
          .max(5, 'Rating must be 5 or lower')
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, handleSubmit, handleBlur, handleChange, touched, values, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="isbn">ISBN</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.isbn && errors.isbn)}
                  id="isbn"
                  value={values.isbn}
                  name="isbn"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter ISBN"
                />
                {touched.isbn && errors.isbn && (
                  <FormHelperText error id="standard-weight-helper-text-isbn">
                    {errors.isbn}
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
                <InputLabel htmlFor="publication_year">Publication Year</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.publication_year && errors.publication_year)}
                  id="publication_year"
                  value={values.publication_year}
                  name="publication_year"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter publication year"
                  type="number"
                />
                {touched.publication_year && errors.publication_year && (
                  <FormHelperText error id="standard-weight-helper-text-publication_year">
                    {errors.publication_year}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="page_count">Page Count</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.page_count && errors.page_count)}
                  id="page_count"
                  value={values.page_count}
                  name="page_count"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter page count"
                  type="number"
                />
                {touched.page_count && errors.page_count && (
                  <FormHelperText error id="standard-weight-helper-text-page_count">
                    {errors.page_count}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="publisher">Publisher</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.publisher && errors.publisher)}
                  id="publisher"
                  value={values.publisher}
                  name="publisher"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter publisher"
                />
                {touched.publisher && errors.publisher && (
                  <FormHelperText error id="standard-weight-helper-text-publisher">
                    {errors.publisher}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="average_rating">Average Rating</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.average_rating && errors.average_rating)}
                  id="average_rating"
                  value={values.average_rating}
                  name="average_rating"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter average rating (0-5)"
                  type="number"
                  inputProps={{ step: 0.1, min: 0, max: 5 }}
                />
                {touched.average_rating && errors.average_rating && (
                  <FormHelperText error id="standard-weight-helper-text-average_rating">
                    {errors.average_rating}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating Book...' : 'Create Book'}
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}