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
      <button>Read</button>
    </div>
    `;
}
function addBookToLibrary(){
  // create the function when form submission is available
  // push the book to the library through the use of an arrow function
  // use document.getElementById("book-btn").addEventListener("click", (e) => {}  );
  let form = document.getElementById("form-id");
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let book = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      pages: document.getElementById("pages").value,
      read: false //figure out how to collect data from radio
    };
    myLibrary.push(book);
  });
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
addBookToLibrary();
// need a way to watch for changes
