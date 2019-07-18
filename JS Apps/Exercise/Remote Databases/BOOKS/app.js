function CRUD() {
    function getAllBooks() {
        let loadBtn = document.getElementById('loadBooks');
        let tableRow = document.querySelector('tr');

        let newTableRow = tableRow.cloneNode(true);
        let url = `https://baas.kinvey.com/appdata/kid_rJMQe06Wr/books`;
        let headers = {
            Authorization: 'Basic 6975a1ecbaae417c95f817beb116f32d'};

        fetch(url, {
            Authorization: 'Basic 6975a1ecbaae417c95f817beb116f32d', credentials: "include"
        })
            .then((response) => console.log(response.json()))
            .then((data) => {
                let keys = Object.keys(data)
            });

    }

    getAllBooks();
}

CRUD();