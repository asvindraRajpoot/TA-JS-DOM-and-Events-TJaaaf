let bigBox = document.querySelector('.container');


for (let i = 1; i <= 500; i++) {
    let box = document.createElement('div');
    box.className = 'box'
    box.innerText = generateRandomNumber();
    bigBox.append(box);
}


function generateRandomNumber() {

    let randomNumber = 0;
    let n = Math.floor(Math.random() * 1000);
    while (n > 500) {
        n = Math.floor(Math.random() * 1000);

    }
    randomNumber = n;

    return randomNumber;
}


function generateRandomColor() {
    let code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '';

    for (let i = 0; i < 6; i++) {
        let n = Math.floor(Math.random() * 16);

        color = color + code[n];
    }

    return `#${color}`;
}

function handler() {


    document.querySelectorAll('.box').forEach(n => {
        n.innerText = generateRandomNumber();
        n.style.backgroundColor = generateRandomColor();
    }
    );
}

bigBox.addEventListener('mousemove', handler);


