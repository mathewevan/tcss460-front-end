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
import axios from '../../utils/axios';

interface IBook {
  isbn13: number;
  authors: string;
  publication: number;
  original_title: string;
  title: string;
  ratings: IRatings;
  icons: IUrlIcon;
}

interface IUrlIcon {
  large: string;
  small: string;
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

interface Title {
  title: string;
}

export default function BookList({ title }: Title) {
  const [books, setBooks] = React.useState<IBook[]>([]);
  const router = useRouter();
  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`/closed/books/title/${title}`);
        setBooks(response.data.books);
      } catch (error) {
        console.error(`Error fetching book-list /closed/books/title/${title}`, error);
      }
    };
    fetchBooks();
  }, []);

  const handleClick = (isbn: number) => {
    router.push(`/books/isbn/${isbn}`);
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
                    image={book.icons.large}
                    alt={book.title}
                    sx={{ height: 250, objectFit: 'contain', border: '1px solid grey', borderRadius: 2 }}
                  />
                </Card>
              </Grid>

              {/* Book Information */}
              <Grid item xs={12} md={8}>
                <Stack alignItems="flex-start" spacing={3}>
                  {/* Title and Author */}
                  <Box>
                    <Typography variant="h3" component="h1" gutterBottom>
                      {book.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
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
