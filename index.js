

const h1 = document.querySelector('h1')
const result = document.querySelector('button')

result.onclick = function () {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.dice1').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    document.querySelector('.dice2').setAttribute('src', 'images/dice' + randomNumber2 + '.png');

    if (randomNumber1 > randomNumber2) {
        h1.innerHTML = '<img src="images/red flag.png"> Player 1 Wins!';
    } else if (randomNumber1 < randomNumber2) {
        h1.innerHTML = 'Player 2 Wins! <img src="images/red flag.png">';
    } else h1.innerText = "It's a Draw!";
};

