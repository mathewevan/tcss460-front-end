'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import MainCard from 'components/MainCard';
import axios from '../../utils/axios';
import Divider from '@mui/material/Divider';

interface ISBN13 {
  isbn: string;
}

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
  book_id: number;
  isbn13: number;
  authors: string;
  publication: number;
  original_title: string;
  title: string;
  ratings: IRatings;
  icons: IUrlIcon;
}

// // Mock data provided by AI (Claude)
// // Mock data - in real app, this would come from API based on ISBN
// const mockBook = {
//   isbn13: 9780743273565,
//   authors: 'F. Scott Fitzgerald',
//   publication: 1925,
//   title: 'The Great Gatsby',
//   ratings: {
//     average: 4.2,
//     count: 1247
//   },
//   image: 'https://images.gr-assets.com/books/1490528560m/4671.jpg',
//   description:
//     'Set in the summer of 1922, The Great Gatsby follows Nick Carraway, a young Yale graduate and World War I veteran from the Midwest who moves to Long Island in 1922, intending to work in the bond business.',
//   genre: 'Literary Fiction',
//   pages: 180,
//   publisher: "Charles Scribner's Sons",
//   language: 'English'
// };

export default function BookSingle({ isbn }: ISBN13) {
  const router = useRouter();
  // const params = useParams();
  // const isbn = params.isbn;
  const [book, setBook] = React.useState<IBook | null>(null);
  const [userRating, setUserRating] = React.useState<number | null>(null);

  const handleBackClick = () => {
    router.push('/books');
  };

  const handleRatingChange = async (event: React.SyntheticEvent, newValue: number | null) => {
    // Immediately update the UI for a responsive feel
    setUserRating(newValue);
    const currentBookId = book?.book_id;
    console.log(currentBookId);
    // Prevent API call if the rating is cleared (newValue is null)
    if (newValue === null) {
      return;
    }

    try {
      const response = await axios.patch(`/closed/books/bookid/${currentBookId}/incRating?rating=${newValue}`);

      setBook((prevBook) => ({
        ...prevBook,
        ...response.data.book
      }));
    } catch (error) {
      console.error(`Error updating rating for book ${currentBookId}:`, error);
    }
  };

  React.useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/closed/books/isbn/${isbn}`);

        console.log(response.data);
        setBook(response.data.book);
      } catch (error) {
        console.error(`Error fetching book-single /closed/books/isbn/${isbn}:`, error);
      }
    };
    fetchBook();
  }, [isbn]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 3, mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBackClick}
          sx={{ mb: 2, boxShadow: 3, border: '1px solid white', borderRadius: 2 }}
        >
          Back to Book List
        </Button>

        <MainCard sx={{ border: '2px solid white', borderRadius: 2, boxShadow: 2 }}>
          <Grid container spacing={4}>
            {/* Book Cover */}
            <Grid item xs={12} md={4}>
              <Card sx={{ width: 'fit-content', ml: 3.5 }}>
                <CardMedia
                  component="img"
                  image={book.icons.large}
                  alt={book.title}
                  sx={{ height: 500, objectFit: 'contain', border: '2px solid grey', borderRadius: 2 }}
                />
              </Card>
            </Grid>

            {/* Book Information */}
            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                {/* Title and Author */}
                <Box>
                  <Typography variant="h3" component="h1" sx={{ fontSize: '1.75rem' }} gutterBottom>
                    {book.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                    by {book.authors}
                  </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Divider />
                </Box>

                {/* Rating Section */}
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '1.5rem' }} gutterBottom>
                    Current Rating
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                    <Typography variant="h4">{book.ratings.average.toFixed(1)}</Typography>
                    <Stack>
                      <Rating value={book.ratings.average} precision={0.1} readOnly />
                      <Typography variant="body2" color="text.secondary">
                        {book.ratings.count} ratings
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* User Rating */}
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Rate this book:
                    </Typography>
                    <Rating value={userRating} onChange={handleRatingChange} size="large" />
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Divider />
                </Box>

                {/* Book Details */}
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '1.5rem' }} gutterBottom>
                    <strong>Book Details</strong>
                  </Typography>
                  <Stack spacing={1}>
                    <Typography>
                      <strong>ISBN-13:</strong> {book.isbn13}
                    </Typography>
                    <Typography>
                      <strong>Publication Year:</strong> {book.publication}
                    </Typography>
                    <Typography>
                      <strong>Original Title::</strong> {book.original_title}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Box>
    </Container>
  );
}
