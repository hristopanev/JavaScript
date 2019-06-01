function solve() {

    let keyWordInput = document.getElementById('string');
    let textInput = document.getElementById('text');

    let keyWord = keyWordInput.value;
    let text = textInput.value;

    let messageRegexString = `${keyWord}(.*)${keyWord}`;
    let messageRegex = new RegExp(messageRegexString, 'g');

    let messageMatch = messageRegex.exec(text);

    let message = messageMatch[1];

    let locationRegeX = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;

    let eastMatch;
    let northMatch;

    let match = locationRegeX.exec(text);

    while (match !== null){
        if (match[1].toUpperCase()=== 'NORTH'){
            northMatch = match;
        } else {
            eastMatch = match;
        }

        match = locationRegeX.exec(text);
    }

    let spanResult = document.getElementById('result');

    let paragraphResultNorth = document.createElement('p');
    paragraphResultNorth.innerHTML = `${northMatch[2]}.${northMatch[3]} N`;
    let paragraphResultEast = document.createElement('p');
    paragraphResultEast.innerHTML = `${eastMatch[2]}.${eastMatch[3]} E`;
    let paragraphResultMessage = document.createElement('p');
    paragraphResultMessage.innerHTML = `Message: ${message}`

    spanResult.appendChild(paragraphResultNorth);
    spanResult.appendChild(paragraphResultEast);
    spanResult.appendChild(paragraphResultMessage);
}