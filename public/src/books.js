function findAuthorById(authors, id) {
  const authorFound = authors.find((author) => author.id === id);
  return authorFound;
}

function findBookById(books, id) {
  const bookFound = books.find((book) => book.id === id);
  return bookFound;
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true)
  );

  let booksBorrowed = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false)
  );

  let finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
}

function getFirstTen(list) {
  return list.slice(0, 10);
}

function getBorrowersForBook(book, accounts) {
  const borrowedBooks = book.borrows.map((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
  });
  return getFirstTen(borrowedBooks);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
