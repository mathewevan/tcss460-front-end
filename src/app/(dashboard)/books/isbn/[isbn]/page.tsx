import React from 'react';
import BookSingle from '../../../../../views/books/book-single';

// ==============================|| PAGE ||============================== //

export default async function BookSinglePage({ params }: { params: Promise<{ isbn: string }> }) {
  const { isbn } = await params;

  return <BookSingle isbn={isbn} />;
}
