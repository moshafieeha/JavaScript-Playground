/*
Library Management System

- The library has a collection of books.
- Each book includes a name, author, publication date, and an identifier.
- The library keeps an inventory count for each book, which can be zero or more.
- The library maintains a list of users.
- Each user has a national code, first name, last name, address, and birth date.

System Requirements:
1. Register new users and remove users.
2. Add new books to the system.
3. Loan books to users and record loan details, including book, user, loan date, and return date.
4. Update the inventory of books.
5. Remove users whose book return date has passed, or list such users.
6. List available books for loan.
7. Track the history of books loaned and returned by each user.
8. Identify the most and least loaned books.
9. Identify the most and least loaned authors.
10. Maintain a history of deleted users, including how many users were removed each year.

Note:
- Ensure that no data is deleted from the system to maintain a full history of users, loans, and books.
*/



// Data structures to hold library information
let books = [];
let users = [];
let loans = [];

// Function to add a new book
function addBook(name, author, publishDate, id) {
  books.push({
    id: id,
    name: name,
    author: author,
    publishDate: new Date(publishDate),
    stock: 0
  });
}

// Function to add a new user
function addUser(nationalCode, firstName, lastName, address, birthDate, id) {
  users.push({
    id: id,
    nationalCode: nationalCode,
    firstName: firstName,
    lastName: lastName,
    address: address,
    birthDate: new Date(birthDate)
  });
}

// Function to update book stock
function updateBookStock(bookId, newStock) {
  for (let book of books) {
    if (book.id === bookId) {
      book.stock = newStock;
      return;
    }
  }
}
////////////////////////////////////////////////////////////////////////////

// 4. Update the inventory of books.
// Function to loan a book
function loanBook(bookId, userId, loanDate, returnDate) {
  for (let book of books) {
    if (book.id === bookId && book.stock > 0) {
      loans.push({
        bookId: bookId,
        userId: userId,
        loanDate: new Date(loanDate),
        returnDate: new Date(returnDate),
        returned: false
      });
      book.stock--;
      return;
    }
  }
}

// Function to return a book
function returnBook(bookId, userId) {
  for (let loan of loans) {
    if (loan.bookId === bookId && loan.userId === userId && !loan.returned) {
      loan.returned = true;
      for (let book of books) {
        if (book.id === bookId) {
          book.stock++;
          return;
        }
      }
    }
  }
}
////////////////////////////////////////////////////////////////////////////

// 5. Remove users whose book return date has passed, or list such users.
// Function to remove users with overdue books
function removeOverdueUsers(currentDate) {
  const overdueUsers = [];
  for (let loan of loans) {
    if (loan.returnDate < new Date(currentDate) && !loan.returned) {
      for (let user of users) {
        if (user.id === loan.userId) {
          overdueUsers.push(user);
        }
      }
    }
  }
  users = users.filter(user => !overdueUsers.includes(user));
  return overdueUsers;
}
////////////////////////////////////////////////////////////////////////////

// 6. List available books for loan.
// Function to get available books
function getAvailableBooks() {
  return books.filter(book => book.stock > 0);
}
////////////////////////////////////////////////////////////////////////////

// 7. Track the history of books loaned and returned by each user.
// Function to get loan history of a user
function getUserLoanHistory(userId) {
  return loans.filter(loan => loan.userId === userId);
}
////////////////////////////////////////////////////////////////////////////

// 8. Identify the most and least loaned books.
// Function to get most loaned books
function getMostLoanedBooks() {
  const bookLoanCounts = {};
  for (let loan of loans) {
    if (bookLoanCounts[loan.bookId]) {
      bookLoanCounts[loan.bookId]++;
    } else {
      bookLoanCounts[loan.bookId] = 1;
    }
  }
  let maxLoans = 0;
  let mostLoanedBooks = [];
  for (let bookId in bookLoanCounts) {
    if (bookLoanCounts[bookId] > maxLoans) {
      maxLoans = bookLoanCounts[bookId];
      mostLoanedBooks = [bookId];
    } else if (bookLoanCounts[bookId] === maxLoans) {
      mostLoanedBooks.push(bookId);
    }
  }
  return mostLoanedBooks;
}

// Function to get least loaned books
function getLeastLoanedBooks() {
  const bookLoanCounts = {};
  for (let loan of loans) {
    if (bookLoanCounts[loan.bookId]) {
      bookLoanCounts[loan.bookId]++;
    } else {
      bookLoanCounts[loan.bookId] = 1;
    }
  }
  let minLoans = Infinity;
  let leastLoanedBooks = [];
  for (let bookId in bookLoanCounts) {
    if (bookLoanCounts[bookId] < minLoans) {
      minLoans = bookLoanCounts[bookId];
      leastLoanedBooks = [bookId];
    } else if (bookLoanCounts[bookId] === minLoans) {
      leastLoanedBooks.push(bookId);
    }
  }
  return leastLoanedBooks;
}
////////////////////////////////////////////////////////////////////////////

// 9. Identify the most and least loaned authors.
// Function to get most loaned authors
function getMostLoanedAuthors() {
  const authorLoanCounts = {};
  for (let loan of loans) {
    const book = books.find(book => book.id === loan.bookId);
    if (book) {
      if (authorLoanCounts[book.author]) {
        authorLoanCounts[book.author]++;
      } else {
        authorLoanCounts[book.author] = 1;
      }
    }
  }
  let maxLoans = 0;
  let mostLoanedAuthors = [];
  for (let author in authorLoanCounts) {
    if (authorLoanCounts[author] > maxLoans) {
      maxLoans = authorLoanCounts[author];
      mostLoanedAuthors = [author];
    } else if (authorLoanCounts[author] === maxLoans) {
      mostLoanedAuthors.push(author);
    }
  }
  return mostLoanedAuthors;
}

// Function to get least loaned authors
function getLeastLoanedAuthors() {
  const authorLoanCounts = {};
  for (let loan of loans) {
    const book = books.find(book => book.id === loan.bookId);
    if (book) {
      if (authorLoanCounts[book.author]) {
        authorLoanCounts[book.author]++;
      } else {
        authorLoanCounts[book.author] = 1;
      }
    }
  }
  let minLoans = Infinity;
  let leastLoanedAuthors = [];
  for (let author in authorLoanCounts) {
    if (authorLoanCounts[author] < minLoans) {
      minLoans = authorLoanCounts[author];
      leastLoanedAuthors = [author];
    } else if (authorLoanCounts[author] === minLoans) {
      leastLoanedAuthors.push(author);
    }
  }
  return leastLoanedAuthors;
}
////////////////////////////////////////////////////////////////////////////

// 10. Maintain a history of deleted users, including how many users were removed each year.
// Function to get the count of deleted users by year
function getDeletedUsersCountByYear(year) {
    let count = 0;
    for (let user of deletedUsers) {
      if (user.deletedAt.getFullYear() === year) {
        count++;
      }
    }
    return count;
  }