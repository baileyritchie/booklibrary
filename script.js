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

function createBookHTML(bookObj) {
  const library = document.querySelector('.library');
  library.innerHTML += 
    `<div class="book-card">
      <div class="book-prop">${bookObj.title} </div>
      <div class="book-prop">${bookObj.author}</div>
      <div class="book-prop">${bookObj.pages}</div>
      <div class="book-prop">${bookObj.read}</div>
      <button>Mark as Read</button>
    </div>
    `;
}
function addBookToLibrary(){
  // create the function when form submission is available
}

function initializeLibrary(){
  // this is where we will map the books in myLibrary to the books in HTML
  myLibrary.forEach((book) => {
    createBookHTML(book);
  });
}
let book1 = new Book('test','bailey',123,true);
myLibrary.push(book1);
initializeLibrary();

console.log(myLibrary);