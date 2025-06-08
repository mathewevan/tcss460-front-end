import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; // For flexible container
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // For the '>' symbol

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    //div groups all elements together so everything shows up in a single parent element
    <div
      style={{
        display: 'flex', // Enable flexbox for vertical stacking
        flexDirection: 'column',
        gap: '16px', // Space between buttons
        width: '300px', // <--- IMPORTANT: Give the div a fixed width
        margin: '0 auto', // <--- IMPORTANT: Center horizontally
        // You might want to add some top/bottom margin for vertical positioning too
        marginTop: '50px'
      }}
    >
      <Button //Search by ISBN
        variant="contained" // Or "outlined", "text"
        sx={{
          // Using Material-UI's sx prop for styling the Button component
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f0f0f0', // Light grey background
          color: '#333', // Dark text color
          '&:hover': {
            backgroundColor: '#9125C7'
          },
          padding: '10px 15px',
          borderRadius: '5px',
          textTransform: 'none', // Prevent uppercase default for button text
          fontSize: '16px',
          minWidth: 'auto', // Allow button to shrink to content
          marginTop: '10px'
        }}
      >
        {/* Icon */}
        <MenuBookIcon sx={{ marginRight: '4px' }} /> {/* Apply margin directly */}
        {/* Title */}
        <Box sx={{ flexGrow: 1, textAlign: 'left' }}>{'Search by ISBN'}</Box>
        {/* Arrow Icon */}
        <ArrowForwardIosIcon sx={{ fontSize: '1em', marginLeft: '8px' }} /> {/* Adjust size and margin */}
      </Button>
      <Button //Search by Title
        variant="contained" // Or "outlined", "text"
        sx={{
          // Using Material-UI's sx prop for styling the Button component
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f0f0f0', // Light grey background
          color: '#333', // Dark text color
          '&:hover': {
            backgroundColor: '#9125C7'
          },
          padding: '10px 10px',
          borderRadius: '5px',
          textTransform: 'none', // Prevent uppercase default for button text
          fontSize: '16px',
          marginTop: '10px'
        }}
      >
        {/* Icon */}
        <BookIcon sx={{ marginRight: '4px' }} /> {/* Apply margin directly */}
        {/* Title */}
        <Box sx={{ flexGrow: 1, textAlign: 'left' }}>{'Search by Title'}</Box>
        {/* Arrow Icon */}
        <ArrowForwardIosIcon sx={{ fontSize: '1em', marginLeft: '8px' }} /> {/* Adjust size and margin */}
      </Button>
      <Button //Search by Rating
        variant="contained" // Or "outlined", "text"
        sx={{
          // Using Material-UI's sx prop for styling the Button component
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f0f0f0', // Light grey background
          color: '#333', // Dark text color
          '&:hover': {
            backgroundColor: '#9125C7'
          },
          padding: '10px 10px',
          borderRadius: '5px',
          textTransform: 'none', // Prevent uppercase default for button text
          fontSize: '16px',
          minWidth: 'auto', // Allows the button to shrink to content
          marginTop: '10px'
        }}
      >
        {/* Icon */}
        <StarHalfIcon sx={{ marginRight: '4px' }} /> {/* Apply margin directly */}
        {/* Title */}
        <Box sx={{ flexGrow: 1, textAlign: 'left' }}>{'Search by Rating'}</Box>
        {/* Arrow Icon */}
        <ArrowForwardIosIcon sx={{ fontSize: '1em', marginLeft: '8px' }} /> {/* Adjust size and margin */}
      </Button>
      <Button //Create Book
        variant="contained" // Or "outlined", "text"
        sx={{
          // Using Material-UI's sx prop for styling the Button component
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f0f0f0', // Light grey background
          color: '#333', // Dark text color
          '&:hover': {
            backgroundColor: '#9125C7'
          },
          padding: '10px 10px',
          borderRadius: '5px',
          textTransform: 'none', // Prevent uppercase default for button text
          fontSize: '16px',
          minWidth: 'auto', // Allow button to shrink to content
          // eslint-disable-next-line prettier/prettier
          marginTop: '10px'
        }}
      >
        {/* Icon */}
        <AddCircleIcon sx={{ marginRight: '4px' }} /> {/* Apply margin directly */}
        {/* Title */}
        <Box sx={{ flexGrow: 1, textAlign: 'left' }}>{'Create Book'}</Box>
        {/* Arrow Icon */}
        <ArrowForwardIosIcon sx={{ fontSize: '1em', marginLeft: '8px' }} /> {/* Adjust size and margin */}
      </Button>
      <Button //View All Books
        variant="contained" // Or "outlined", "text"
        sx={{
          // Using Material-UI's sx prop for styling the Button component
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f0f0f0', // Light grey background
          color: '#333', // Dark text color
          '&:hover': {
            backgroundColor: '#9125C7'
          },
          padding: '10px 10px',
          borderRadius: '5px',
          textTransform: 'none', // Prevent uppercase default for button text
          fontSize: '16px',
          minWidth: 'auto', // Allow button to shrink to content
          marginTop: '10px'
        }}
      >
        {/* Icon */}
        <ListAltIcon sx={{ marginRight: '4px' }} /> {/* Apply margin directly */}
        {/* Title */}
        <Box sx={{ flexGrow: 1, textAlign: 'left' }}>{'View All Books'}</Box>
        {/* Arrow Icon */}
        <ArrowForwardIosIcon sx={{ fontSize: '1em', marginLeft: '8px' }} /> {/* Adjust size and margin */}
      </Button>
    </div>
  );
}
