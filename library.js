const debug = true;
const myLibrary = [];
const shelves = document.getElementById("grid")

function db(input) {
    if (debug) console.log(input);
}

//creates a new book object.
class Book{
    constructor(title,author,pages,readState){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readState = readState; 
    }
}

function clearLibrary(){
    shelves.innerHTML = "";
}

//logs the new Book and then clears the prompt screen.
function createBook(event){
    event.preventDefault();
    clearLibrary();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pageNum.value;
    const readState = event.target.readStatus.checked;

    const newBook = new Book(title,author,pages,readState)

    length = myLibrary.push(newBook)
    event.target.reset();

    myLibrary.forEach(addBookToLibrary);
}

function openLibrary(){
    book1 = new Book("The Hobbit","J R R Tolkien",320,true);
    book2 = new Book("The Phantom Toolbooth","Norman Juster",272,true);
    book3 = new Book("French Victories","Unknown",0,false);

    myLibrary.push(book1,book2,book3)
}

function addBookToLibrary(input){


    const bookCover = document.createElement("div");
    bookCover.setAttribute("id",input.title);
    bookCover.classList.add("book")

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent=input.title;

    const author = document.createElement("h3");
    author.classList.add("author");
    author.textContent = input.author;

    const pages = document.createElement("p");
    pages.classList.add("pageNum");
    pages.textContent = input.pages + " pages";

    const readStatus = document.createElement("p");
    readStatus.classList.add("readStatus");
    if(input.readState === true){
        readStatus.textContent = "Read";
    }
    else{
        readStatus.textContent = "Unread";
    }

    bookCover.append(title, author,pages,readStatus);
    shelves.appendChild(bookCover)

    db(bookCover)
}


//initialize the script
openLibrary();
shelves.innerHTML = "";
myLibrary.forEach(addBookToLibrary)

const bookForm = document.getElementById("new-book");
bookForm.addEventListener("submit",createBook);