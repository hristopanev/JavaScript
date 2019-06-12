function solve() {
    console.log(Array.from(document.getElementsByTagName('img')).forEach((img) => {
        img.addEventListener('click', clickEvent)
    }));


    function clickEvent(e) {
        let card = e.target;
        card.src = './images/whiteCard.jpg';
        card.removeEventListener('click', clickEvent);
        let parent = card.parentNode;

        let spans = document.getElementById('result').children;

        let leftSpan = spans[0];
        let rightSpan = spans[2];

        if (parent.id === 'player1Div') {
            leftSpan.textContent = card.name;
        } else if (parent.id === 'player2Div') {
            rightSpan.textContent = card.name;
        }

        if (spans[0].textContent && spans[2].textContent) {
            let winner;
            let looser;

            if (+leftSpan.textContent > +rightSpan.textContent) {
                winner = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
                looser = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);

            } else if (+leftSpan.textContent < +rightSpan.textContent) {
                winner = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
                looser = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);

            } else {

            }

            winner.style.border = '2px solid green';
            looser.style.border = "2px solid darkred";


            document.getElementById('history')
                .textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;


                leftSpan.textContent = "";
                rightSpan.textContent = "";

            // setTimeout(function () {
            //     leftSpan.textContent = "";
            //     rightSpan.textContent = "";
            // }, 2000)
        }

    }
}