'use client';

import * as React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import MainCard from 'components/MainCard';
import axios from '../../utils/axios';

// Interface creation taken from Canvas to create mock data with.

// interface IRatings {
//     average: number;
//     count: number;
//     rating_1: number;
//     rating_2: number;
//     rating_3: number;
//     rating_4: number;
//     rating_5: number;
// }
//
// interface IUrlIcon {
//     large: string;
//     small: string;
// }
//
// interface IBook {
//     isbn13: number;
//     authors: string;
//     publication: number;
//     original_title: string;
//     title: string;
//     ratings: IRatings;
//     icons: IUrlIcon;
// }

// Mock data provided by AI (Claude)
// Mock data - in real app, this would come from API based on ISBN
const mockBook = {
  isbn13: 9780743273565,
  authors: 'F. Scott Fitzgerald',
  publication: 1925,
  title: 'The Great Gatsby',
  ratings: {
    average: 4.2,
    count: 1247
  },
  image: 'https://images.gr-assets.com/books/1490528560m/4671.jpg',
  description:
    'Set in the summer of 1922, The Great Gatsby follows Nick Carraway, a young Yale graduate and World War I veteran from the Midwest who moves to Long Island in 1922, intending to work in the bond business.',
  genre: 'Literary Fiction',
  pages: 180,
  publisher: "Charles Scribner's Sons",
  language: 'English'
};

export default function BookSingle({ isbn }: { isbn: string }) {
  const [book] = React.useState(mockBook);
  const [userRating, setUserRating] = React.useState<number | null>(null);

  React.useEffect(() => {
    axios
      // Update route to match isbn lookup
      .get(`closed/books/isbn/${isbn}`)
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

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setUserRating(newValue);
    console.log(`User rated book ${newValue} stars`);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 3 }}>
        <MainCard>
          <Grid container spacing={4}>
            {/* Book Cover */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia component="img" image={book.image} alt={book.title} sx={{ height: 500, objectFit: 'contain' }} />
              </Card>
            </Grid>

            {/* Book Information */}
            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                {/* Title and Author */}
                <Box>
                  <Typography variant="h3" component="h1" gutterBottom>
                    {book.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                    by {book.authors}
                  </Typography>
                </Box>

                {/* Rating Section */}
                <Box>
                  <Typography variant="h6" gutterBottom>
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

                {/* Book Details */}
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Book Details
                  </Typography>
                  <Stack spacing={1}>
                    <Typography>
                      <strong>ISBN-13:</strong> {book.isbn13}
                    </Typography>
                    <Typography>
                      <strong>Publication Year:</strong> {book.publication}
                    </Typography>
                    <Typography>
                      <strong>Genre:</strong> {book.genre}
                    </Typography>
                    <Typography>
                      <strong>Pages:</strong> {book.pages}
                    </Typography>
                    <Typography>
                      <strong>Publisher:</strong> {book.publisher}
                    </Typography>
                    <Typography>
                      <strong>Language:</strong> {book.language}
                    </Typography>
                  </Stack>
                </Box>

                {/* Description */}
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Description
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {book.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Box>
    </Container>
  );
}
