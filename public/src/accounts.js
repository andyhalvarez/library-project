function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account) => account.id === id);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  const accountsSorted = accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
  return accountsSorted;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBooks = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id) {
        totalBooks += 1;
      }
    }
  }
  // let totalBooks = 0;
  // const bookTotal = books.filter((book) => {
  //   book.borrows.id === account.id;
  //   totalBooks += 1;
  // });
  // return totalBooks;
  return totalBooks;
}

function getBooksPossessedByAccount(account, books, authors) {
  let total = [];
  let borrowMatch = [];
  books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
      id: item.id,
      title: item.title,
      genre: item.genre,
      authorId: item.authorId,
      author: {},
      borrows: {},
    };
    const { id, title, genre, authorId, author, borrows } = book;

    borrowed.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === false) {
        total.push(book);
        borrowMatch.push(borrow);
        book.borrows = borrowMatch;
        book.author = authors.filter((auth) => auth.id === book.authorId)[0];
      }
    });
  });
  return total;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
