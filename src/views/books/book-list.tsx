'use client'
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
import Container from '@mui/material/Container';
import MainCard from 'components/MainCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';

// ================================|| List of Books ||================================ //

const mockBook1 = {
    isbn13: 9780743273565,
    authors: "F. Scott Fitzgerald",
    publication: 1925,
    title: "The Great Gatsby",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
}

const mockBook2 = {
    isbn13: 9780439023480,
    authors: "Suzanne Collins",
    publication: 2008,
    title: "The Hunger Games (The Hunger Games, #1)",
    image: "https://images.gr-assets.com/books/1447303603m/2767052.jpg"
}

const mockBook3 = {
    isbn13: 9780385352870,
    authors: "Hiroyuki Takei",
    publication: 2015,
    title: "Shaman King, Vol. 1: A Shaman in Tokyo",
    image: "https://images.gr-assets.com/books/1444234846m/885744.jpg"
}

const mockBook4 = {
    isbn13: 2940013283250,
    authors: "Megan Abbott",
    publication: 1992,
    title: "The Fever",
    image: "https://images.gr-assets.com/books/1381359885m/18656036.jpg"
}

const mockBook5 = {
    isbn13: 9780525478810,
    authors: "John Green",
    publication: 2012,
    title: "The Fault in Our Stars",
    image: "https://images.gr-assets.com/books/1360206420m/11870085.jpg"
}

export default function BookList() {
    const router = useRouter();
    const [book1] = React.useState(mockBook1);
    const [book2] = React.useState(mockBook2);
    const [book3] = React.useState(mockBook3);
    const [book4] = React.useState(mockBook4);
    const [book5] = React.useState(mockBook5);

    const handleClick = () => {
        router.push('/books');
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ mb: 3 }}>
                <Button
                    startIcon={<ArrowForwardIcon />}
                    onClick={handleClick}
                    sx={{ mb: 2 }}
                >
                    More Information Here!
                </Button>

                <MainCard>
                    <Grid container spacing={4}>
                        {/* Book Cover */}
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={book1.image}
                                    alt={book1.title}
                                    sx={{ height: 400, objectFit: 'cover' }}
                                />
                            </Card>
                        </Grid>

                        {/* Book 1 Information */}
                        <Grid item xs={12} md={8}>
                            <Stack spacing={3}>
                                {/* Title and Author */}
                                <Box>
                                    <Typography variant="h3" component="h1" gutterBottom>
                                        {book1.title}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                                        by {book1.authors}
                                    </Typography>
                                </Box>
                                {/* Partial Book Details */}
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Book Details
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography><strong>ISBN-13:</strong> {book1.isbn13}</Typography>
                                        <Typography><strong>Publication Year:</strong> {book1.publication}</Typography>
                                        <Typography><strong>Cover:</strong> {book1.image}</Typography>
                                    </Stack>
                                </Box>
                                </Stack>
                        </Grid>

                        {/* Book 2 Information */}
                        <Grid item xs={12} md={8}>
                            <Stack spacing={3}>
                                {/* Title and Author */}
                                <Box>
                                    <Typography variant="h3" component="h1" gutterBottom>
                                        {book2.title}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                                        by {book2.authors}
                                    </Typography>
                                </Box>
                                {/* Partial Book Details */}
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Book Details
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography><strong>ISBN-13:</strong> {book2.isbn13}</Typography>
                                        <Typography><strong>Publication Year:</strong> {book2.publication}</Typography>
                                        <Typography><strong>Cover:</strong> {book2.image}</Typography>
                                    </Stack>
                                </Box>
                                </Stack>
                        </Grid>

                        {/* Book 3 Information */}
                        <Grid item xs={12} md={8}>
                            <Stack spacing={3}>
                                {/* Title and Author */}
                                <Box>
                                    <Typography variant="h3" component="h1" gutterBottom>
                                        {book3.title}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                                        by {book3.authors}
                                    </Typography>
                                </Box>
                                {/* Partial Book Details */}
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Book Details
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography><strong>ISBN-13:</strong> {book3.isbn13}</Typography>
                                        <Typography><strong>Publication Year:</strong> {book3.publication}</Typography>
                                        <Typography><strong>Cover:</strong> {book3.image}</Typography>
                                    </Stack>
                                </Box>
                                </Stack>
                        </Grid>

                        {/* Book 4 Information */}
                        <Grid item xs={12} md={8}>
                            <Stack spacing={3}>
                                {/* Title and Author */}
                                <Box>
                                    <Typography variant="h3" component="h1" gutterBottom>
                                        {book4.title}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                                        by {book4.authors}
                                    </Typography>
                                </Box>
                                {/* Partial Book Details */}
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Book Details
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography><strong>ISBN-13:</strong> {book4.isbn13}</Typography>
                                        <Typography><strong>Publication Year:</strong> {book4.publication}</Typography>
                                        <Typography><strong>Cover:</strong> {book4.image}</Typography>
                                    </Stack>
                                </Box>
                                </Stack>
                        </Grid>

                        {/* Book 5 Information */}
                        <Grid item xs={12} md={8}>
                            <Stack spacing={3}>
                                {/* Title and Author */}
                                <Box>
                                    <Typography variant="h3" component="h1" gutterBottom>
                                        {book5.title}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                                        by {book5.authors}
                                    </Typography>
                                </Box>
                                {/* Partial Book Details */}
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Book Details
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Typography><strong>ISBN-13:</strong> {book5.isbn13}</Typography>
                                        <Typography><strong>Publication Year:</strong> {book5.publication}</Typography>
                                        <Typography><strong>Cover:</strong> {book5.image}</Typography>
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
