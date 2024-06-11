
let library = [];


function Book(title, author, isbn, status) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = status;
}

function addBook(title, author, isbn) {
    const newBook = new Book(title, author, isbn, "Available");
    library.push(newBook);
    console.log(`Added book: ${title} by ${author} (ISBN: ${isbn})`);
}


function displayBooks() {
    console.log("Available Books:");
    library.forEach(book => {
        if (book.status === "Available") {
            console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
        }
    });
}

function findBook(isbn) {
    return library.find(book => book.isbn === isbn);
}

function borrowBook(isbn) {
    const book = findBook(isbn);
    if (book) {
        if (book.status === "Available") {
            book.status = "Borrowed";
            console.log(`Book with ISBN ${isbn} has been borrowed.`);
        } else {
            console.log("Book is not available for borrowing.");
        }
    } else {
        console.log("Book with ISBN not found.");
    }
}


function returnBook(isbn) {
    const book = findBook(isbn);
    if (book) {
        if (book.status === "Borrowed") {
            book.status = "Available";
            console.log(`Book with ISBN ${isbn} has been returned.`);
        } else {
            console.log("Book is not borrowed.");
        }
    } else {
        console.log("Book with ISBN not found.");
    }
}


addBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
addBook("To Kill a Mockingbird", "Harper Lee", "9780061120084");
displayBooks();
borrowBook("9780743273565");
displayBooks();
returnBook("9780743273565");
displayBooks();
