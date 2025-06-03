// material-ui
import Stack from '@mui/material/Stack';

// project imports
import ChangeRatingForm from 'sections/update/update-forms/UpdateStars';
import MainCard from '../../components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function ChangeRating() {
  return (
    <MainCard>
      <Stack alignItems="flex-start">
        <ChangeRatingForm />
      </Stack>
    </MainCard>
  );
}
