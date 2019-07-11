function attachEvents() {
    document.getElementById('btnLoad')
        .addEventListener('click', function () {

            let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

            fetch(url)
                .then((request) => request.json())
                .then((data) => {
                    let values = Object.values(data);

                    for (let value of values){
                        let name = value.person;
                        let phoneNumber = value.phone;

                        let phoneBook = document.getElementById('phonebook');

                        let buttonDel = document.createElement('button');
                        buttonDel.textContent = 'DELETE';

                        let li = document.createElement('li');

                        li.textContent = `${name}: ${phoneNumber}`;
                        li.appendChild(buttonDel);

                        phoneBook.appendChild(li);

                    }
                })
        })
}

attachEvents();