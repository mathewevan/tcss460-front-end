// material-ui
import Stack from '@mui/material/Stack';

// project imports
import SearchRatingForm from 'sections/books/search/search-forms/SearchRating';
import MainCard from '../../../components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SearchRating() {
  return (
    <MainCard>
      <Stack alignItems="flex-start">
        <SearchRatingForm />
      </Stack>
    </MainCard>
  );
}