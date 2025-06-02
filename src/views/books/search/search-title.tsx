// material-ui
import Stack from '@mui/material/Stack';

// project imports
import SearchTitleForm from 'sections/books/search/search-forms/SearchTitle';
import MainCard from '../../../components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SearchTitle() {
  return (
    <MainCard>
      <Stack alignItems="flex-start">
        <SearchTitleForm />
      </Stack>
    </MainCard>
  );
}