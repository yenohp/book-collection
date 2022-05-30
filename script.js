const addButton = document.querySelector('#add-large');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const mainContent = document.querySelector('.main-content');
const closeButton = document.querySelector('.close-button');
const form = document.querySelector('form');
const shelf = document.querySelector('.shelf');
const inputs = Array.from(document.querySelectorAll('input'));
const collection = [];


addButton.addEventListener('click', (e) => {
    modal.classList.add('show-modal');

})
closeButton.addEventListener('click', (e) => {
    modal.classList.remove('show-modal');
    // Clear inputs
    clearForm();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title, author, pages, read;
    [title, author, pages, read] = [e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].checked];
    addBook(title, author, pages, read);
    modal.classList.remove('show-modal');
    clearForm();
})
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = `${title} by ${author}, ${pages}, ${read ? 'has read' : 'has not read'}`;
}

Book.prototype.showInfo = function () {
    console.log(this.info);
}
Book.prototype.toggleRead = function () {
    if (this.read == true) this.read = false;
    else this.read = true;

}
function addBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    // Check if duplicate
    // if(!checkForDuplicate(book));
    createBookElement(book);
    collection.push(book);
}

function removeBook() {
    if (collection.length == 1) {
        collection.pop();
    }
    // if the delete button is pressed
    // remove the book from the array && the display
    // move every book over to the left?
}

function clearForm() {
    for (let input of inputs) {
        if (input.type == 'text' || input.type == 'number') input.value = '';
        else input.checked = false;
    }
}

function createBookElement(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    const { title, author, pages, read } = book;

    const titleP = document.createElement('p');
    titleP.innerText = title;
    const authorP = document.createElement('p');
    authorP.innerText = author;
    const pagesP = document.createElement('p');
    pagesP.innerText = pages;

    const readButton = document.createElement('button');
    if (read) readButton.classList.add('has-read');
    else readButton.classList.add('hasnt-read');

    bookCard.appendChild(titleP);
    bookCard.appendChild(authorP);
    bookCard.appendChild(pagesP);
    bookCard.appendChild(readButton);
    shelf.appendChild(bookCard);
}
// Debug function
function showBooks(arr) {
    for (let book of arr) {
        console.log('--------------------');
        book.showInfo();
        console.log('--------------------');
    }
}
// Maths for calculating position
// Row = if(arr.length > 6) { compare to multiples of 6}
// Column = 