import React from 'react';
import BookList from '../../../views/books/book-list';

// ==============================|| PAGE ||============================== //

export default function BookListPage({ params }: { params: { title: string } }) {
  const { title } = params;
  return <BookList title={title} />;
}
