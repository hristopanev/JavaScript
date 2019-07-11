function getInfo() {
    let stopId = document.getElementById("stopId").value;
    let stopName = document.getElementById("stopName");
    let busLine = document.getElementById("buses");

    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    fetch(url)
        .then((request) => request.json())
        .then((data) => {
            stopName.textContent = data.name;
            busLine.innerHTML = '';

            let buses = Object.entries(data.buses);

            for (let [busNumber, busTime] of buses) {
                let listItem = document.createElement('li');
                listItem.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`;
                busLine.appendChild(listItem);
            }

        })
        .catch(error => {
            stopName.textContent = 'Error!';
        });

    document.getElementById("stopId").value = '';
}