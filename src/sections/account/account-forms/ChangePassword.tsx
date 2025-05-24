'use client';

import { Formik } from 'formik';
import Button from '@mui/material/Button';
import AnimateButton from '../../../components/@extended/AnimateButton';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import * as Yup from 'yup';

export default function ChangePassword() {
  return (
    <Formik
      initialValues={{
        oldpass: '',
        newpass: '',
        confirmpass: ''
      }}
      onSubmit={async (values, helpers) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        newpass: Yup.string().max(255).required('Password is required'),
        confirmpass: Yup.string()
          .required('Confirm Password is required')
          .test('confirmpass', 'Both Passwords must match!', (confirmpass, yup) => yup.parent.newpass === confirmpass)
      })}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor="oldpass">Current Password</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.oldpass && errors.oldpass)}
                id="oldpass"
                type="password"
                value={values.oldpass}
                name="oldpass"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter old password"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newpass">New Password</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.newpass && errors.newpass)}
                id="newpass"
                type="password"
                value={values.newpass}
                name="newpass"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter new password"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="newpass">Confirm Password</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.confirmpass && errors.confirmpass)}
                id="confirmpass"
                type="password"
                value={values.confirmpass}
                name="confirmpass"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label={'Toggle password visibility'} onClick={() => {}} edge="end" color="default">
                      <EyeInvisibleOutlined />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Re-enter new password"
              />
            </Grid>
            <Grid item xs={12}>
              <Stack alignItems="flex-start" spacing={1}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Change Password
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
