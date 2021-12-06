
// input
const form = document.querySelector('form')
form.addEventListener('submit', addBook)

// book list
const taskList = document.querySelector('tbody')
taskList.addEventListener('click', delBook)

document.addEventListener('DOMContentLoaded', getBooks)

function getBooks() {

    // Local storage data
    let books
    if(localStorage.getItem("books") === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }

    // console.log

    books.forEach(function(book) {

        // TBODY element and TR element
        const bookList = document.querySelector('tbody')
        const tr = document.createElement('tr')

        book.forEach(function(bookItem){

            // TD element
            const td = document.createElement('td')
            td.innerHTML = bookItem;
            tr.appendChild(td)

        })

        bookList.appendChild(tr)

    });

}

// delete Books
function delBook(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you realy want to delete this book?')){

            let book = event.target.parentElement.textContent.slice(0, -1) //

            let i = event.parentNode.parentNode.rowIndex;

            // console.log(book)

            document.querySelector('tbody').deleteRow(i);

            removeStorage(book)

        }
    }
}

function deleteRow(book) {
    var i = book.parentNode.parentNode.rowIndex;
    document.querySelector('table').deleteRow(i);
    removeStorage(i);
}


function removeStorage(i){

    let books = []
    if(localStorage.getItem("books") === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }

    let myIndex = books.indexOf(i-1);
    books.splice(myIndex, 1);

    console.log(myIndex)


    localStorage.setItem('books', JSON.stringify(books))
    // console.log(book)

}


function delTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    removeAllStorage()
}

// remove All Storage
function removeAllStorage(){
    localStorage.removeItem('books')
}

// add Books
function addBook(event){

    const title = document.querySelector('#book_title').value
    const author = document.querySelector('#book_author').value
    const isbn = document.querySelector('#book_isbn').value
    const Xxx = "<input type=\"button\" value=\"Delete\" onclick=\"deleteRow(this)\">"



    // element from DOM
    const bookList = document.querySelector('tbody')

    // element to DOM
    const tr = document.createElement('tr')

    tr.innerHTML = "<td>" + title + "</td>" + "<td>" + author + "</td>" + "<td>" + isbn + "</td>" + "<td>" + Xxx + "</td>";

    bookList.appendChild(tr)

    let book = [title, author, isbn, Xxx]
    bookStorage(book)

    event.preventDefault()
}

function bookStorage(book) {
    let books = []
    if(localStorage.getItem("books") === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }

    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

