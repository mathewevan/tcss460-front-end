import React from 'react';
import BookList from '../../../../../views/books/book-list-rating';

// ==============================|| PAGE ||============================== //

export default async function BookListPage({ params }: { params: { rating: string } }) {
  const { rating } = params;

  return <BookList rating={rating} />;
}
