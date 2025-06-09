'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from '../../../../utils/axios';
import { Alert, Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AnimateButton from 'components/@extended/AnimateButton';

export default function SearchIsbn() {
  const router = useRouter();
  const [showError, setShowError] = useState(false); // Renamed for clarity

  return (
    <>
      {showError && (
        <Alert icon={<ErrorOutlineIcon fontSize="inherit" />} severity="error" sx={{ mb: 2 }}>
          Book Not Found
        </Alert>
      )}

      <Formik
        initialValues={{ isbn13: '' }}
        validationSchema={Yup.object({
          isbn13: Yup.string().length(13, 'ISBN13 must be exactly 13 digits').required('ISBN13 is required')
        })}
        onSubmit={async (values) => {
          setShowError(false);
          try {
            await axios.get(`/closed/books/isbn/${values.isbn13}`);

            router.push(`/books/view/${values.isbn13}`);
          } catch (error) {
            setShowError(true);
            console.error('API call failed as expected. Showing alert.', error);
          }
        }}
      >
        {({ errors, handleSubmit, handleBlur, handleChange, touched, values, isSubmitting }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="isbn13">ISBN 13</InputLabel>
                  <OutlinedInput
                    fullWidth={false}
                    error={Boolean(touched.isbn13 && errors.isbn13)}
                    id="isbn13"
                    type="text"
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
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                    Continue
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
