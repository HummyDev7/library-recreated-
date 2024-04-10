const AddBook = ( function() {

  let bookInfo = [];

  //Cache DOM
  let bookTitle = document.querySelector('#book__title');
  let bookAuthor = document.querySelector('#book__author');
  let bookPages = document.querySelector('#book__pages');
  let bookFormContainer = document.querySelector('.addBookForm');

  //Binding Events
  bookFormContainer.addEventListener('submit', render);

  function render() {
    getBookInformation();
  }
  
  function Book(title, author, pages) {
    return {
      title,
      author,
      pages
    }
  };

  function getBookInformation() {
   let book = Book(bookTitle.value, bookAuthor.value, bookPages.value);
   bookInfo.push(book.title, book.author, book.pages);
  }


})();
