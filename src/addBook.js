const AddBook = ( function() {

  let bookInfo = [];

  //Cache DOM
  let bookTitle = document.querySelector('#book__title');
  let bookAuthor = document.querySelector('#book__author');
  let bookPages = document.querySelector('#book__pages');
  let bookFormContainer = document.querySelector('.addBookForm');
  let emptyContainer = document.querySelector('.empty__library');
  let notEmptyContainer = document.querySelector('.notEmpty__library');

  //Binding Events
  bookFormContainer.addEventListener('submit', render);

  function render() {
    getBookInformation();
  }

  function empLib() {
    if (notEmptyContainer.hasChildNodes()) {
      emptyContainer.style.display = "none";
    } 
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

  return {
    emplibrary: empLib()
  }
})();

AddBook.emplibrary();

