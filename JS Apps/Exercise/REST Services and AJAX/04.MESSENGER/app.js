function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json';
    let submit = document.getElementById('submit');
    let messages = document.getElementById('messages');
    let author = document.getElementById('author');
    let contentInput = document.getElementById('content');
    let refresh = document.getElementById('refresh');

    function loadMessage() {
            messages.innerHTML = '';
            fetch(url)
                .then((request) => request.json())
                .then((data) => {
                    // for (let post of Object.values(data)) {
                    //     let name = post.author;
                    //     let content = post.content;
                    //
                    //     messages.textContent = `${name}: ${content}\n`
                    // }

                    let post = Object.values(data);

                    messages.textContent = post
                        .map(value => `${value.author}: ${value.content}`)
                        .join('\n');
                })
    }


    function postMessage() {
        let name = author.value;
        let content = contentInput.value;
        author.value = '';
        contentInput.value = '';

        let data = {
            author: name,
            content
        };

        if (name.length && content.length){

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(x => x.json())
                .then(x => {
                    loadMessage()
                })
        }
    }

    refresh.addEventListener('click', function () {
        loadMessage();
    });

    submit.addEventListener('click', function () {
        postMessage()
    });

}

attachEvents();