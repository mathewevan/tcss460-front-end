'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';

// material-ui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainCard from 'components/MainCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';

// ================================|| List of Books ||================================ //

const mockBook1 = {
  isbn13: 9780743273565,
  authors: 'F. Scott Fitzgerald',
  publication: 1925,
  title: 'The Great Gatsby',
  image: 'https://images.gr-assets.com/books/1490528560m/4671.jpg'
};

const mockBook2 = {
  isbn13: 9780439023480,
  authors: 'Suzanne Collins',
  publication: 2008,
  title: 'The Hunger Games (The Hunger Games, #1)',
  image: 'https://images.gr-assets.com/books/1447303603m/2767052.jpg'
};

const mockBook3 = {
  isbn13: 9780385352870,
  authors: 'Hiroyuki Takei',
  publication: 2015,
  title: 'Shaman King, Vol. 1: A Shaman in Tokyo',
  image: 'https://images.gr-assets.com/books/1444234846m/885744.jpg'
};

const mockBook4 = {
  isbn13: 2940013283250,
  authors: 'Megan Abbott',
  publication: 1992,
  title: 'The Fever',
  image: 'https://images.gr-assets.com/books/1381359885m/18656036.jpg'
};

const mockBook5 = {
  isbn13: 9780525478810,
  authors: 'John Green',
  publication: 2012,
  title: 'The Fault in Our Stars',
  image: 'https://images.gr-assets.com/books/1360206420m/11870085.jpg'
};

export default function BookList() {
  const router = useRouter();
  const books = [mockBook1, mockBook2, mockBook3, mockBook4, mockBook5];

  const handleClick = (isbn13: number) => {
    router.push(`/books/${isbn13}`);
  };

  return (
    <MainCard>
      <Box
        sx={{
          maxWidth: '1000px',
          mx: 'auto',
          bgcolor: 'background.default',
          p: 4,
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <Stack spacing={6}>
          {books.map((book, index) => (
            <Grid container key={book.isbn13} sx={{ border: '1px solid white', borderRadius: 2, padding: 2 }}>
              {/* Book Cover */}
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 0, width: 'fit-content', ml: 7.75 }}>
                  <CardMedia
                    component="img"
                    image={book.image}
                    alt={book.title}
                    sx={{ height: 250, objectFit: 'contain', border: '1px solid grey', borderRadius: 2 }}
                  />
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
                    <Typography variant="h5" color="gray" sx={{ mb: 2 }}>
                      by {book.authors}
                    </Typography>
                  </Box>

                  {/* Book Details */}
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      Book Details
                    </Typography>
                    <Stack spacing={1}>
                      <Typography>
                        <strong>ISBN-13:</strong> {book.isbn13}
                      </Typography>
                      <Typography>
                        <strong>Publication Year:</strong> {book.publication}
                      </Typography>
                    </Stack>
                  </Box>

                  <Button
                    startIcon={<ArrowForwardIcon />}
                    onClick={() => handleClick(book.isbn13)}
                    sx={{ mb: 2, border: '1px solid white', borderRadius: 2 }}
                  >
                    More Information Here!
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Box>
    </MainCard>
  );
}
