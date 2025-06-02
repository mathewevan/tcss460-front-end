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
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import { SyntheticEvent, useEffect, useState } from 'react';
import { StringColorProps } from 'types/password';
import { strengthColor, strengthIndicator } from '../../../utils/password-strength';
import EmailIcon from '@mui/icons-material/Email';

export default function ChangePassword() {
  //const router = useRouter();
  const [level, setLevel] = useState<StringColorProps>();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };

  // This handler can be shared as its logic is generic
  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  // This useEffect initializes the password strength for an empty string.
  // If you want it to react to changes in the "newpass" field,
  // you'll need to call changePassword(values.newpass) appropriately.
  useEffect(() => {
    changePassword('');
  }, []);
  return (
    <Formik
      initialValues={{
        email: '',
        oldpass: '',
        newpass: ''
      }}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {}}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email required'),
        newpass: Yup.string()
          .required('Password is required')
          .test('no-leading-trailing-whitespace', 'Password cannot start or end with spaces', (value) => value === value.trim())
          .min(
            10,
            'Be at least 10 characters long\n' +
              'Include at least one uppercase letter\n' +
              'Include at least one lowercase letter\n' +
              'Include at least one digit\n' +
              'Include at least one exclamation mark (!)\n' +
              'Not contain 3 or more of the same character in a row\n' +
              'Use only A-Z, a-z, 0–9, and !'
          )
          .test('password-strength', '', function (value) {
            if (value) {
              changePassword(value);
            } else {
              changePassword('');
            }
            return true;
          })
      })}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.email && errors.email)}
                id="email"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Enter login email"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="email icon" edge="end" color="secondary">
                      {<EmailIcon />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.email && errors.email && <div style={{ color: 'red', marginTop: '4px', fontSize: '0.75rem' }}>{errors.oldpass}</div>}
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="oldpass">Old Password</InputLabel>
              <OutlinedInput
                fullWidth={false}
                error={Boolean(touched.oldpass && errors.oldpass)}
                id="oldpass"
                type="password"
                value={values.oldpass}
                name="oldpass"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowOldPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="secondary"
                    >
                      {showOldPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
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
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="secondary"
                    >
                      {showNewPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter new password"
              />
              {level && level.label && (
                <div style={{ color: level.color, marginTop: '4px', fontSize: '0.75rem' }}>Password strength: {level.label}</div>
              )}
              {touched.newpass && errors.newpass && (
                <div
                  style={{
                    color: 'red',
                    marginTop: '4px',
                    fontSize: '0.75rem',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {errors.newpass}
                </div>
              )}
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
