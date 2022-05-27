const addButton = document.querySelector('#add-large');
const body = document.querySelector('body');
const overlay = document.createElement('div');
const mainContent = document.querySelector('.main-content');

const collection = [];
overlay.style.gridArea = '1/1/-1/-1';
overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

addButton.addEventListener('click', (e) => {
    // Can only click once 
    addButton.disabled = 'true';
    // Create form pop-up element w/ low opacity overlay
    body.appendChild(overlay);
    // Form element has 4 inputs

})

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
Book.prototype.toggleRead = function () {
    if (this.read == true) this.read = false;
    else this.read = true;

}
function addBook() {
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