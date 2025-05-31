// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//Sections Formik/Yup Import
import CreatingABook from 'sections/books/create-book';

export default function CreateBook() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack sx={{ mb: { xs: -0.5, sm: 0.5 } }} spacing={1}>
          <Typography variant="h3">Adding a Book</Typography>
          <Typography color="secondary">If you want to add a book to our website, please input the information below!</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <CreatingABook />
      </Grid>
    </Grid>
  );
}
