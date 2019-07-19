function CRUD() {
    const APPID = 'kid_rJMQe06Wr';
    const APPSECRET = '6975a1ecbaae417c95f817beb116f32d';
    const USERNAME = 'guest';
    const PASSWORD = 'guest';
    const GET_BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const POST_BASE_64 = btoa(APPID + ':' + APPSECRET);
    const GETAUTH = {"Authorization": 'Basic ' + GET_BASE_64};
    // const POSTAUTH = {"Authorization": 'Basic ' + POST_BASE_64};


    let titleInputElement = document.getElementById('title');
    let authorInputElement = document.getElementById('author');
    let isbnInputElement = document.getElementById('isbn');

    let tableBodyElement = document.querySelector('tbody');
    tableBodyElement.innerHTML = "";

    let loadBtn = document.getElementById('loadBooks');
    let submitBtn = document.getElementById('submit');


    loadBtn.addEventListener('click', loadBooks);

    function loadBooks() {
        tableBodyElement.innerHTML = "";
        let url = `https://baas.kinvey.com/appdata/kid_rJMQe06Wr/books`;

        fetch(url, {
            headers: GETAUTH
        })
            .then(handler)
            .then(data =>
                data.forEach(element => {
                    let [id, isbn, author, title] = Object.values(element);
                    let currentTr = createTrElement(title, author, isbn, id);
                    tableBodyElement.appendChild(currentTr)
                })
            );

        tableBodyElement.addEventListener('click', ev => {
            let element = ev.target;
            let auth = {
                "Authorization": 'Basic ' + GET_BASE_64,
                "Content-type": "application/json",
            };
            if (element.textContent === "Delete"){
                let elementToRemove = element.parentNode.parentNode;
                let id = elementToRemove.getAttribute('id');
                let deleteUrl = url + '/' + id;

                let body = {};

                fetch(deleteUrl, {
                    method: "DELETE",
                    headers: auth,
                    body: JSON.stringify(body)
                })
                    .then(handler)
                    .then(response => {
                        if (response) {
                            elementToRemove.remove();
                        }
                    })
            } else {
                let parent = element.parentNode;
                let id = parent.getAttribute('id');
                let putUrl = url + '/' + id;

                titleInputElement.value = parent.getElementsByTagName('td')[0].textContent;
                authorInputElement.value = parent.getElementsByTagName('td')[1].textContent;
                isbnInputElement.value = parent.getElementsByTagName('td')[2].textContent;

                parent.getElementsByTagName('button')[0].addEventListener('click', () => {
                    let newTitle = titleInputElement.value;
                    let newAuthor = authorInputElement.value;
                    let newIsbn = isbnInputElement.value;
                    let body = {isbn: newIsbn, author: newAuthor, title: newTitle,};

                    fetch(putUrl, {
                        method: "PUT",
                        headers: auth,
                        body: JSON.stringify(body)
                    })
                        .then(handler)
                        .then(response => {
                            parent.getElementsByTagName('td')[0].textContent = newTitle;
                            parent.getElementsByTagName('td')[1].textContent = newAuthor;
                            parent.getElementsByTagName('td')[2].textContent = newIsbn;

                        });

                    clearInputFields();

                });
            }
        });

        function createBook() {
            let titleFromInput = titleInputElement.value;
            let authorFromInput = authorInputElement.value;
            let isbnFromInput = isbnInputElement.value;
            let postUrl = `https://baas.kinvey.com/appdata/${APPID}/books`;

            if (titleFromInput && authorFromInput && isbnFromInput){
                let body = {isbn: isbnFromInput, author: authorFromInput, title: titleFromInput};
                let auth = {
                    "Authorization": 'Basic ' + GET_BASE_64,
                    "Content-type": "application/json",
                };
                fetch(postUrl, {
                    method: "POST",
                    headers: auth,
                    body: JSON.stringify(body)
                })
                    .then(handler)
                    .then(response => {
                        if (response) {
                            let currentTr = createTrElement(titleFromInput, authorFromInput, isbnFromInput, "toBeSet");
                            tableBodyElement.appendChild(currentTr);
                        }
                    });
            }

            clearInputFields();
        }

    }

    function clearInputFields() {
        titleInputElement.value = '';
        authorInputElement.value = '';
        isbnInputElement.value = '';

    }

    function createTrElement(title, author, isbn, id) {
        let trElement = document.createElement('tr');

        trElement.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>`;

        trElement.setAttribute('id', id);

        return trElement;
    }

    function handler(response) {
        if (response > 400) throw new Error();

        return response.json();
    }
}

CRUD();