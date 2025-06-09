// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Sections Formik/Yup Import
import CreatingABook from 'sections/books/create/create-book';

//Axios Import
import axios from '../../utils/axios';

import React from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import { Button } from '@mui/base';
import { useRouter } from 'next/navigation';

interface IRatings {
  average: number;
  count: number;
  rating_1: number;
  rating_2: number;
  rating_3: number;
  rating_4: number;
  rating_5: number;
}

interface IUrlIcon {
  large: string;
  small: string;
}

interface IBook {
  isbn13: number;
  authors: string;
  publication: number;
  original_title: string;
  title: string;
  ratings: IRatings;
  icons: IUrlIcon;
}

interface CreateBookProps {
  createBook?: IBook;
}

export default function CreateBook({ createBook }: CreateBookProps) {
  const router = useRouter();
  const [book, setBook] = React.useState<IBook | null>(null);

  const handleBackClick = () => {
    router.push('/books');
  };

  React.useEffect(() => {
    axios
      // Update route to match the creating a book route.
      .get(`closed/books`) //The route for creating a book
      // Create some state variable for storing the resulting book data
      .then((response) => {
        console.log(response.data);
      })
      // optionally replace the error logging with another state variable that
      // is used to render an error component / message
      .catch((error) => {
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/closed/books/`);
        setBook(response.data.book);
      } catch (error) {
        console.error(`Error fetching book-single /closed/books/:`, error);
      }
    };
    fetchBook();
  }, []);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 3, mb: 3 }}>
        <Button
          //startIcon={<ArrowBackIcon />}
          onClick={handleBackClick}
          //sx={{ mb: 2, boxShadow: 3, border: '1px solid white', borderRadius: 2 }}
        >
          Back to Book List
        </Button>
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
      </Box>
    </Container>
  );
}
