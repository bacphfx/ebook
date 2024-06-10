// utils/localStorage.js
export const getRecentBooks = () => {
  const books = localStorage.getItem("recentBooks");
  return books ? JSON.parse(books) : [];
};

export const addRecentBook = (book) => {
  const books = getRecentBooks();
  // Remove the book if it already exists
  const updatedBooks = books.filter((b) => b.id !== book.id);
  // Add the new book to the front of the array with the current date
  updatedBooks.unshift({ ...book, lastRead: new Date().toLocaleDateString() });
  // Keep only the first 10 books
  if (updatedBooks.length > 10) {
    updatedBooks.pop();
  }
  localStorage.setItem("recentBooks", JSON.stringify(updatedBooks));
};
