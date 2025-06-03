import React from 'react';
import CreateBook from '../../../../views/books/create-book';

// ==============================|| PAGE ||============================== //

export default function BookSinglePage({ params }: { params: { createBook: any } }) {
  //return <CreateBook />;
  const { createBook } = params;
  return <CreateBook createBook={createBook} />;
}
