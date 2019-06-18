function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    let sendTextArea = document.getElementsByTagName('textarea')[0];
    let decodedTextArea = document.getElementsByTagName('textarea')[1];

    encodeButton.addEventListener('click', function () {
        let inputMessage = sendTextArea.value;
        let encodedMessage = '';


        for (let i = 0; i < inputMessage.length; i++) {

            encodedMessage += String.fromCharCode(inputMessage[i].charCodeAt(0) + 1);
        }

        decodedTextArea.value = encodedMessage;
        sendTextArea.value = '';
    });

    decodeButton.addEventListener('click', function () {
        let outputMessage = decodedTextArea.value;
        let decodedMessage = '';

        for (let i = 0; i < outputMessage.length; i++) {
            decodedMessage += String.fromCharCode(outputMessage[i].charCodeAt(0) - 1);
        }

        decodedTextArea.value = decodedMessage;
    })
}