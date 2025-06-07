// material-ui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import CreateBookForm from 'sections/create/create-forms/CreateBook';
import MainCard from '../../components/MainCard';

// ==============================|| CREATE BOOK PAGE ||============================== //

export default function CreateBook() {
  return (
    <MainCard>
      <Stack alignItems="flex-start" spacing={2}>
        <Typography variant="h4" component="h1">
          Create New Book
        </Typography>
        <CreateBookForm />
      </Stack>
    </MainCard>
  );
}