import React from 'react';
import ChangeRating from '../../../../../views/books/book-single-rating-change';

// ==============================|| PAGE ||============================== //

export default function ChangeRatingPage({ params }: { params: { bookId: number; starLevel: number } }) {
  return <ChangeRating bookId={params.bookId} starLevel={params.starLevel} />;
}
