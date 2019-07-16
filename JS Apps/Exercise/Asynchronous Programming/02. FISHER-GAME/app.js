function attachEvents() {
    const elements = {
        catches: document.getElementById('catches'),
        loadBtn: document.querySelector('button.load'),
        createBtn: document.querySelector('button.add'),
    };

    elements.loadBtn.addEventListener('click', loadAllCatches);
    elements.createBtn.addEventListener('click', createCatch);

    elements.catches.children[0].style.display = 'none';

    function loadAllCatches() {

        fetch('https://fisher-game.firebaseio.com/catches.json', {method: 'GET'})
            .then(handler)
            .then(showAllCatches)
    }

    function showAllCatches(data) {
        Object.keys(data).forEach((key) => {

            let catchElement = elements.catches.children[0].cloneNode(true);
            catchElement.style.display = 'inline-block';

            catchElement.setAttribute('data-id', key);
            catchElement.querySelector('input.angler').value = data[key].angler;
            catchElement.querySelector('input.weight').value = data[key].weight;
            catchElement.querySelector('input.species').value = data[key].species;
            catchElement.querySelector('input.location').value = data[key].location;
            catchElement.querySelector('input.bait').value = data[key].bait;
            catchElement.querySelector('input.captureTime').value = data[key].captureTime;
            catchElement.querySelector('button.update').addEventListener('click', updateCatch);
            catchElement.querySelector('button.delete').addEventListener('click', deleteCatch);


            elements.catches.appendChild(catchElement);
        })
    }

    function createCatch() {
        let catchElement = document.querySelector('fieldset#addForm');

        let data = Array.from(catchElement.children)
            .filter((element) => element.tagName === 'INPUT')
            .reduce((acc, curr) => {
                let prop = curr.className;
                acc[prop] = curr.value;
                return acc;
            }, {});

        let headers = {
            method: 'POST',
            body: JSON.stringify(data)
        };

        fetch('https://fisher-game.firebaseio.com/catches.json', headers)
            .then(handler)
            .then((data) => {
                elements.loadBtn.click();
            })
    }

    function updateCatch(event) {
        let catchId = event.currentTarget.parentNode.getAttribute('data-id');
        let catchElement = event.currentTarget.parentNode;

        let data = Array.from(catchElement.children)
            .filter((element) => element.tagName === 'INPUT')
            .reduce((acc, curr) => {
                let prop = curr.className;
                acc[prop] = curr.value;
                return acc;
            }, {});

        let headers = {
            method: 'PUT',
            body: JSON.stringify(data)
        };

        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, {headers})
            .then(handler)
            .then((data) => {
                elements.loadBtn.click();
            })
    }

    function deleteCatch(event) {
        let catchId = event.currentTarget.parentNode.getAttribute('data-id');
        let catchElement = event.currentTarget.parentNode;

        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, {method: 'DELETE'})
            .then(handler)
            .then((data) => {
                catchElement.remove();
            })
    }

    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Someting went wrong. Error: ${response.statusText}`)
        }

        return response.json();
    }
}

attachEvents();

