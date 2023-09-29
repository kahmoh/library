const titleInput = document.getElementById('title-input')
const authorInput = document.getElementById('author-input')
const pageCountInput = document.getElementById('page-count-input')
const addBookBtn = document.getElementById('confirm-button')
const dialogButton = document.getElementById('dialog-button')
const dialog = document.getElementById('dialog')
const bookList = document.getElementById('book-list')

const myLibrary = [];

function book (title,author,pageCount,dataSet) {
}

function addBookToLibrary () {
    addBookBtn.addEventListener('click',() => {
        const currentBook = new book(titleInput.value, authorInput.value, pageCountInput.value)
        myLibrary.push(currentBook)
        renderBooks()
    })
}

function showDialog () {
    dialogButton.addEventListener('click',() => {
        dialog.showModal()
    })
}

function renderBooks () {
    bookList.textContent = ''
    myLibrary.forEach((book) => {
        const currentBook = document.createElement('li')
        currentBook.textContent = JSON.stringify(book)
        bookList.appendChild(currentBook)
    })
}

showDialog()

addBookToLibrary()
