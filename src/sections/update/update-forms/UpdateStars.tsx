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

export default function ChangeRating() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ book_id: '', star_level: '' }}
      validationSchema={Yup.object({
        star_level: Yup.string().max(5, 'Star Level must be 5 or less. ').required('Star Level is required').min(1, 'Star Level must be 1 or more. '),
        book_id:Yup.string().required('Book ID is required')
      })}
      onSubmit={(values, { resetForm }) => {
          console.log("Hello!");
        router.push(`/update/${values.book_id}/${values.star_level}`);
      }}
    >
      {({ errors, handleSubmit, handleBlur, handleChange, touched, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="book-id">Book ID</InputLabel>
                  <OutlinedInput
                    fullWidth={false}
                    error={Boolean(touched.book_id && errors.book_id)}
                    id="book_id"
                    value={values.book_id}
                    name="book_id"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter Book ID"
                  />
                  {touched.book_id && errors.book_id && (
                    <FormHelperText error id="standard-weight-helper-text-book_id">
                      {errors.book_id}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
                <Grid item xs={12}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="star_level">Star Level</InputLabel>
                        <OutlinedInput
                            fullWidth={false}
                            error={Boolean(touched.star_level && errors.star_level)}
                            id="star_level"
                            value={values.star_level}
                            name="star_level"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Enter Star Level"
                        />
                        {touched.star_level && errors.star_level && (
                            <FormHelperText error id="standard-weight-helper-text-star_level">
                                {errors.star_level}
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
