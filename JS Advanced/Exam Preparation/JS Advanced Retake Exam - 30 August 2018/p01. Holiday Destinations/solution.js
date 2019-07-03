function addDestination() {

    let city = document.querySelector("#input > input:nth-child(2)");
    let country = document.querySelector("#input > input:nth-child(4)");
    let seasonInput = document.querySelector("#seasons");
    let destinationList = document.getElementById('destinationsList');

    let season = capitalizeFirstLetter(seasonInput.value);

    if (city.value !== '' && country.value !== '') {

        let tr = document.createElement('tr');
        let tdDestination = document.createElement('td');
        let tdSeason = document.createElement('td');


        tdDestination.textContent = `${city.value}, ${country.value}`;
        tdSeason.textContent = season;
        tr.appendChild(tdDestination);
        tr.appendChild(tdSeason);
        destinationList.appendChild(tr);

        seasonCounter(season);

        city.value = '';
        country.value = '';
        seasonInput.value = 'summer';

    }

    function capitalizeFirstLetter(season) {
        return season.charAt(0).toUpperCase() + season.slice(1);
    }

    function seasonCounter(season) {
        if (season === 'Summer') {
            let seasonSummer = document.getElementById('summer').value;
            current = +seasonSummer + +1;
            document.getElementById('summer').value = current;

        }
        if (season === 'Autumn') {
            console.log("tuk");
            let seasonAutumn = document.getElementById('autumn').value;
            current = +seasonAutumn + +1;
            document.getElementById('autumn').value = current;

        }
        if (season === 'Winter') {

            let seasonWinter = document.getElementById('winter').value;
            current = +seasonWinter + +1;
            document.getElementById('winter').value = current;

        }
        if (season === 'Spring') {

            let seasonSpring = document.getElementById('spring').value;
            current = +seasonSpring + +1;
            document.getElementById('spring').value = current;

        }


    }
}