import React from 'react';
import BookSingle from '../../../../../views/books/book-single';

// ==============================|| PAGE ||============================== //

export default async function BookSinglePage({ params }: { params: { isbn: string } }) {
  const { isbn } = params;

  return <BookSingle isbn={isbn} />;
}
