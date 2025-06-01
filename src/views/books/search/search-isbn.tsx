// material-ui
import Stack from '@mui/material/Stack';

// project imports
import SearchIsbnForm from 'sections/books/search/search-forms/SearchIsbn';
import MainCard from '../../../components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SearchIsbn() {
  return (
    <MainCard>
      <Stack alignItems="flex-start">
        <SearchIsbnForm />
      </Stack>
    </MainCard>
  );
}
