// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import AccountChangePassword from 'sections/account/account-forms/ChangePassword';

// ================================|| CHANGE PASSWORD ||================================ //

export default function ChangePassword() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack sx={{ mb: { xs: -0.5, sm: 0.5 } }} spacing={1}>
          {/*<Typography variant="h3">Change Password</Typography>*/}
          <Typography color="secondary">Please choose your new password</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AccountChangePassword />
      </Grid>
    </Grid>
  );
}
