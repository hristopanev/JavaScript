function timeToWalk(steps, footPrint, kmPerH) {

    let walkedInM = steps * footPrint;
    let walkedInKm = walkedInM / 1000;
    let minutesRest = parseInt(walkedInM / 500);

    let totalSeconds = walkedInM / kmPerH * 3600 + minutesRest * 60;
    let hoursWalked = parseInt(totalSeconds / 3600);
    totalSeconds -= hoursWalked * 3600;
    let minutesWalked = parseInt(totalSeconds / 60);
    let secondWalked = totalSeconds % 60;

    console.log(minutesWalked);
}
timeToWalk(4000, 0.60, 5);