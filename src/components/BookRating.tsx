'use client'
import * as React from 'react';
import { ReactNode } from 'react';
import { useState } from "react";

//material-ui Imports
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Star from '@mui/icons-material/Star';

//Attempt at Customizability:
/*const labels: { [index: string]: string} = { //By production, show numbers AND text
    1.0: 'Strongly Disliked',
    2.0: 'Bad',
    3.0: 'Meh',
    4.0: 'Good',
    5.0: 'Really Enjoyed',
};

const iconFill = styled(Rating)({
    '& .MuiRating-iconFilled': { //The filled Rating in a icon level
        color: '#C9A736', //Gold
    },
    '& .MuiRating-iconHover': { //The filled when hovering to update a rating
        color: '#9F49B7', //Purple
    },
});

Object.keys(labels).forEach(index => { // Attempt at adding formatting to text - rating value
    const text = labels[index];
    console.log(`${text} - ${index}`);
});

function getTextDescription(value: number) {
    return `${labels[value]}`;
}

function ratingDisplay() { //Originally, the size stuff is part of a export default
    return (
        <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={3} />
            <Rating name="size-large" defaultValue={3} size="large" />
        </Stack>
    );
}
*/


export default function ratingResults() {
    const [value, setValue] = React.useState<number | null>(3); //To create a default of 3 stars if there is no value.
    return(
        <Box sx={{ '& > legend': { mt: 2 } }}>
        <Typography component="legend">Book Rating:</Typography>
        <Rating
            name="Book Rating"
            value={value}
            precision={0.25}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />
    </Box>
    );

    
        //Attempt at Custom
        /*
        <Typography>Book Rating:</Typography> 
        <iconFill 
            name="bookRatings"
            defaultValue={3}
            precision={0.01}
        />
        */
}

/*
const RatingComponent = () => { //Looking into how to make this actually work.
  const [rating, setRating] = useState(0); // Initial rating value
  const handleRatingChange = (newRating) => {
    setRating(newRating); // Update state with the new rating
  };

 return ( 
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRatingChange(star)}
          style={{ color: star <= rating ? "gold" : "gray" }}
        >
        </button>
      ))}
    </div>
  );
}; */

export default BookRating;