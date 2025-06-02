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

// ============================|| STATIC - CODE VERIFICATION ||============================ //

export default function SearchTitle() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ title: '' }}
      validationSchema={Yup.object({
        title: Yup.string().required('Title is required')
      })}
      onSubmit={(values, { resetForm }) => {
        router.push(`/books/title/${values.title}`);
      }}
    >
      {({ errors, handleSubmit, handleBlur, handleChange, touched, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="title">Title</InputLabel>
                  <OutlinedInput
                    fullWidth={false}
                    error={Boolean(touched.title && errors.title)}
                    id="title"
                    value={values.title}
                    name="title"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Title"
                  />
                  {touched.title && errors.title && (
                    <FormHelperText error id="standard-weight-helper-text-isbn13">
                      {errors.title}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained">
                  Continue
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}