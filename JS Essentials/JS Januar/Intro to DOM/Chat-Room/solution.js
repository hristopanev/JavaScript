function solve() {

    //0 is mine, 1 is Pesho
    let buttons = Array.from(document.getElementsByTagName('button'));
    let inputFields = Array.from(document.getElementsByTagName('input'));


    buttons.forEach(b => {
        b.addEventListener('click', function (event) {

            let divElement = document.createElement('div');
            let spanElement = document.createElement('span');
            let pElement = document.createElement('p');


            let senderBtn = event.target.name;


            debugger;

            if (senderBtn === 'myBtn') {
                spanElement.textContent = 'Me';
                pElement.textContent = document.getElementById('myChatBox').value;
                divElement.style.textAlign = 'left';

            } else if (senderBtn === 'peshoBtn') {
                spanElement.textContent = 'Pesho';
                pElement.textContent = document.getElementById('peshoChatBox').value;
                divElement.style.textAlign = 'right';

            }

            divElement.appendChild(spanElement);
            divElement.appendChild(pElement);


            document.getElementById('chatChronology').appendChild(divElement);

            inputFields[0].value= "";
            inputFields[1].value= "";

        })
    })

}