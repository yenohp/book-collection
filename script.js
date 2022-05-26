const addButton = document.querySelector('#add-large');



const collection = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    const info = `${title} by ${author}, ${pages}, ${read ? 'has read' : 'has not read'}`;
}

Book.prototype.showInfo = function () {
    console.log(this.info);
}

function addBook() {
    // if the 'add book' button is pressed
    // a form pops up w/ 4 inputs
    // 2 text, 1 numeric, and one togglable
    // submit/cancel buttons
    // if either is pressed, remove the pop-up form
    // if submitted, add the book to the collection array && create a visual representation
    // if canceled, disregard all inputs
}

function removeBook() {
    // if the delete button is pressed
    // remove the book from the array && the display
    // move every book over to the left?
}

function displayCollection() {
    for (let book of collection) {
        book.showInfo();
    }
}


// Maths for calculating position
// Row = if(arr.length > 6) { compare to multiples of 6}
// Column = 