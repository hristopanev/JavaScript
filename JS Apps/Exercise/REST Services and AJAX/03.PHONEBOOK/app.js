function attachEvents() {
    let loadButton = document.getElementById('btnLoad');
    let phoneBook = document.getElementById('phonebook');

    loadButton.addEventListener('click', function () {
        reloadFunction();
    });

    function reloadFunction() {
        phoneBook.innerHTML = '';
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

        fetch(url)
            .then((request) => request.json())
            .then((data) => {
                let keys = Object.keys(data);


                for (let key of keys) {
                    let person = data[key];
                    let name = person.person;
                    let phoneNumber = person.phone;

                    let phoneBook = document.getElementById('phonebook');
                    let buttonDel = document.createElement('button');
                    buttonDel.textContent = 'DELETE';

                    let li = document.createElement('li');

                    li.textContent = `${name}: ${phoneNumber}`;
                    phoneBook.appendChild(li);

                    buttonDel.addEventListener('click', function () {
                        deleteData(key);
                    });

                    li.appendChild(buttonDel);
                }

            })
    }

    document.getElementById('btnCreate')
        .addEventListener('click', function () {
            let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

            let newContactJSON = JSON.stringify({
                person: document.getElementById('person').value,
                phone: document.getElementById('phone').value
            });

            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: newContactJSON,
            })
                .then(x => x.json())
                .then(x => {
                    reloadFunction()
                });

            document.getElementById('person').value = '';
            document.getElementById('phone').value = '';
        });


    function deleteData(key) {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`, {
            method: 'delete'
        })
            .then(response => response.json())
            .then(x => {
                reloadFunction()
            })
    }
}

attachEvents();