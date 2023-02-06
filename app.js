console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {
    constructor(id, title, author, read) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.read = read;
    }
  }
  
class Library {
    constructor() {
      this.bookCount = 1;
      this.books = [];
    }
    markRead(checkbox) {
      for(let i= 0; i < this.books.length; i++){
        if(this.books[i].id == checkbox.id) {
          this.books[i].read = true;
          checkbox.checked = true;
          checkbox.disabled = true;
        }
      }
    }
    addBook() {
      let title = document.getElementById("title").value;
      let author = document.getElementById("author").value;
      let read = document.getElementById("read").checked;
      const tableBody = document.getElementById("tableBody");
      let newBook = new Book(this.bookCount, title, author, read);
      this.books.push(newBook);
      const newRow = document.createElement("tr");
      newRow.id = `newRow${this.bookCount}`;
      const titleTd = document.createElement("td");
      titleTd.textContent = newBook.title;
      const authorTd = document.createElement("td");
      authorTd.textContent = newBook.author;
      const checkTd = document.createElement("td");
      const checkBox = document.createElement("input");
      checkBox.id = this.bookCount;
      checkBox.type = "checkbox";
      checkBox.name = "read";
      checkBox.checked = newBook.read;
      checkBox.disabled = newBook.read;
      checkBox.addEventListener("click", () => library.markRead(checkBox));
      checkTd.appendChild(checkBox);
      const removeTd = document.createElement("td");
      const removeButton = document.createElement("button");
      removeButton.id = this.bookCount;
      removeButton.classList.add("removeButton");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => library.removeBook(removeButton.id, newRow.id));
      removeTd.appendChild(removeButton);
      newRow.appendChild(titleTd);
      newRow.appendChild(authorTd);
      newRow.appendChild(checkTd);
      newRow.appendChild(removeTd);
      tableBody.appendChild(newRow);
      this.bookCount++;
    }
    removeBook(bookId, rowId) {
      this.books = this.books.filter(book => book.id != bookId);
      document.getElementById(rowId).remove();
    }
  }
  
  let library = new Library();
   const addBookButton = document.getElementById("addBook");
  addBookButton.addEventListener("click", () => {
    library.addBook(library.books, library.bookCount)
  });
  