'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
// import { useParams } from 'next/navigation';
// import axios from 'axios';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

import MainCard from 'components/MainCard';
import Divider from '@mui/material/Divider';

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

const mockBook: IBook = {
  isbn13: 9780743273560,
  authors: 'F. Scott Fitzgerald',
  publication: 1925,
  original_title: 'The Great Gatsby',
  title: 'The Great Gatsby',
  ratings: {
    average: 3.89,
    count: 2683664,
    rating_1: 86236,
    rating_2: 197621,
    rating_3: 606158,
    rating_4: 936012,
    rating_5: 947718
  },
  icons: {
    large: 'https://images.gr-assets.com/books/1490528560m/4671.jpg',
    small: 'https://images.gr-assets.com/books/1490528560s/4671.jpg'
  }
};

export default function BookSingle() {
  const router = useRouter();
  //const params = useParams();
  //const isbn = params.isbn;
  const [book] = React.useState<IBook>(mockBook);
  const [userRating, setUserRating] = React.useState<number | null>(null);
  const [deleteDialog, setDeleteDialog] = React.useState(false);
  const [snackBar, setSnackBar] = React.useState(false);

  const handleBackClick = () => {
    router.push('/books');
  };

  const handleDeleteClick = () => {
    setDeleteDialog(true);
  };

  const handleDeleteCancel = () => {
    setDeleteDialog(false);
  };

  const handleSuccessClose = () => {
    setSnackBar(false);
  };

  const handleSuccessAndBack = () => {
    setSnackBar(false);
    handleBackClick();
  };

  const handleDeleteConfirm = async () => {
    try {
      console.log('fake delete success for test');
      setDeleteDialog(false);
      setSnackBar(true);
    } catch (error) {
      console.error('Error deleting book: ', error);
    }
  };

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setUserRating(newValue);
    console.log(`User rated book ${newValue} stars`);
  };

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

        <Button
          startIcon={<DeleteIcon />}
          onClick={handleDeleteClick}
          color="error"
          variant="outlined"
          sx={{ mb: 2, ml: 2, boxShadow: 3, borderRadius: 2 }}
        >
          Delete Book
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
                    <strong>Current Rating</strong>
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
                      <strong>Original Title:</strong> {book.original_title}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Box>
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Delete Book</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete &quot;{book.title}&quot;? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="outlined">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar open={snackBar} onClose={handleSuccessClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          sx={{ width: '100%' }}
          action={
            <Button color="inherit" size="small" onClick={handleSuccessAndBack}>
              Back to List
            </Button>
          }
        >
          Book deleted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
