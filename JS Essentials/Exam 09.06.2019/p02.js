function solve(capacity, passengers) {

    let wagons = [];

    let restPassengers = 0;

    for (let i = 0; i < passengers.length; i++) {

        if (passengers[i] === capacity) {
            wagons.push(passengers[i]);
        } else if (passengers[i] < capacity) {

            if (restPassengers === 0) {
                let all = passengers[i];
                wagons.push(all);
            } else if (restPassengers > capacity) {
                restPassengers = restPassengers - capacity + passengers[i];
                wagons.push(capacity);
            } else if (restPassengers + passengers[i] > capacity) {

                restPassengers = restPassengers + passengers[i] - capacity;
                wagons.push(capacity);
            } else if (restPassengers + passengers[i] <= capacity) {
                let all = restPassengers + passengers[i];
                restPassengers = all - capacity;
                wagons.push(all);
            }
        } else if (passengers[i] > capacity) {
            restPassengers += passengers[i] - capacity;
            wagons.push(capacity);
        }

        if (wagons.length === passengers.length) {
            break;
        }
    }

    if (restPassengers > 0) {
        console.log(wagons);
        console.log(`Could not fit ${restPassengers} passengers`)
    } else {
        console.log(wagons);
        console.log(`All passengers aboard`);
    }
}

solve(20, [30, 15, 45, 18, 5]);