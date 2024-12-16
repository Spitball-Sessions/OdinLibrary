const debug = true;


const myLibrary = [];

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

//logs the new Book and then clears the prompt screen.
function createBook(event){
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pageNum.value;
    const readState = event.target.readStatus.checked;

    const newBook = new Book(title,author,pages,readState)
    db(newBook)

    myLibrary.push(newBook)
    event.target.reset();
    db(myLibrary)
}

function openLibrary(){
    book1 = new Book("The Hobbit","J R R Tolkien",320,true);
    book2 = new Book("The Phantom Toolbooth","Norman Juster",272,true);
    book3 = new Book("French Victories","Unknown",0,false);

    myLibrary.push(book1,book2,book3)
}



//initialize the script
openLibrary();
db(myLibrary);

const bookForm = document.getElementById("new-book");
bookForm.addEventListener("submit",createBook);