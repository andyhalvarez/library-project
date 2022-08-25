function findAuthorById(authors, id) {
  const authorFound = authors.find((author) => author.id === id);
  return authorFound;
}

function findBookById(books, id) {
  const bookFound = books.find((book) => book.id === id);
  return bookFound;
}

function partitionBooksByBorrowedStatus(books) {
  const booksReturned = books.filter((book) => book.borrows[0].returned);
  const booksUnreturned = books.filter((book) => !book.borrows[0].returned);
  return [booksUnreturned, booksReturned];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
