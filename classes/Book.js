const Media = require('./Media');

class Book extends Media {
  constructor(title, year, genre, author, numPages, rating) {
    super(title, year, genre);
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
  static highestRating(books) {
    return books.reduce((highest, book) => (book.rating > highest.rating ? book : highest), books[0]);
  }
}

// don't change below
module.exports = Book;
