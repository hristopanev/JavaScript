const kenveyUserName = 'guest';
const kenveyPassword = 'guest';
const appKey = 'kid_rJMQe06Wr';
const appSecret = '6975a1ecbaae417c95f817beb116f32d';

const baseUrl = 'https://baas.kinvey.com/appdata/kid_rJMQe06Wr/books';

const elements = {
    loadBtn: document.getElementById('loadBooks'),
    submitBtn: document.getElementById('submitBtn'),
    cancelBtn: document.getElementById('cancelBtn'),
    editBtn: document.getElementById('editBtn'),
    inputTitle: document.getElementById('title'),
    inputAuthor: document.getElementById('author'),
    inputISBN: document.getElementById('isbn'),
    tBodyBooks: document.querySelector('tbody'),
    h3Form: document.querySelector('h3')
};

elements.tBodyBooks.innerHTML = '';

elements.submitBtn.addEventListener('click', addBook);
elements.loadBtn.addEventListener('click', loadBooks);
elements.cancelBtn.addEventListener('click', cancelBook);
elements.editBtn.addEventListener('click', editBook);

function addBook(ev) {
    ev.preventDefault();

    let title = elements.inputTitle.value;
    let author = elements.inputAuthor.value;
    let isbn = elements.inputISBN.value;

    if (title && author && isbn) {
        const dataObject = {
            title,
            author,
            isbn
        };

        const headers = {
            method: 'POST',
            body: JSON.stringify(dataObject),
            credentials: 'include',
            Authorization: 'Basic' + btoa(`${kenveyUserName}:${kenveyPassword}`),
            headers: {
                'Content-type': 'application/json'
            }
        };

        fetch(baseUrl, headers)
            .then(handler)
            .then(loadBooks)
            .catch(err => console.log(err))
    }
}

function loadBooks() {
    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey' + localStorage.getItem('authToken'),
    };

    fetch(baseUrl, headers)
        .then(handler)
        .then((data) => {
            elements.tBodyBooks.innerHTML = '';


            data.forEach(book => {
                let trNextBook = document.createElement('tr');
                trNextBook.setAttribute('id', book._id);

                trNextBook.innerHTML = `<td> ${book.title} </td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>
                    <button class="btnEdit" value=${book._id}>Edit</button>
                    <button class="btnDelete" value=${book._id}>Delete</button>
                </td>`


                trNextBook.querySelector('button.btnEdit')
                    .addEventListener('click', () => loadEditForm(book._id));

                trNextBook.querySelector('button.btnDelete')
                    .addEventListener('click', () => deleteBook(book._id));


                elements.tBodyBooks.appendChild(trNextBook);
            });
        })
}


function loadEditForm(bookId) {
    let dataToEdit = document.getElementById('')
}


function handler(response) {
    if (response.status >= 400) {
        throw new Error(response.status);
    }

    return response.json();
}



