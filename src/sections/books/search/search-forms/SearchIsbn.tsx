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

export default function SearchIsbn() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ isbn13: '' }}
      validationSchema={Yup.object({
        isbn13: Yup.string().length(13, 'ISBN13 must be exactly 13 digits').required('ISBN13 is required')
      })}
      onSubmit={(values, { resetForm }) => {
        router.push(`/books/isbn/${values.isbn13}`);
      }}
    >
      {({ errors, handleSubmit, handleBlur, handleChange, touched, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="isbn13">ISBN 13</InputLabel>
                  <OutlinedInput
                    fullWidth={false}
                    error={Boolean(touched.isbn13 && errors.isbn13)}
                    id="isbn13"
                    value={values.isbn13}
                    name="isbn13"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter ISBN13 number"
                  />
                  {touched.isbn13 && errors.isbn13 && (
                    <FormHelperText error id="standard-weight-helper-text-isbn13">
                      {errors.isbn13}
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
