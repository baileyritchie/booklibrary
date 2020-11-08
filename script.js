// main page for library with books

let myLibrary = []; // where book objects are stored

function Book(title,author,pages, read = false) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

Book.prototype.info = function () {
  return (
    this.read ? `${this.title} by ${this.author}, ${this.pages} pages and read already.` 
    : `${this.title} by ${this.author}, ${this.pages} pages and not read yet.`);
}

Book.prototype.toggleRead = function () {
  // method that changes the read status of the book
  if (this.read) {
    this.read = false;
  } else this.read = true;
}
let book1 = new Book('hi there','me',123,true);

console.log(Object.getPrototypeOf(book1));