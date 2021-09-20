

let box = document.querySelector('.gameBox');
let timeBox = document.querySelector(".timer");

// to generate random number

function generateRandomNumber() {

    let num = (Math.floor((Math.random()) * 10));
    console.log(num);
    return num;
}

let className = ["fa-hand-point-right", "fa-moon", "fa-star", "fa-eye", "fa-spider", "fa-feather", "fa-dove", "fa-tachometer-alt", "fa-hand-point-right", "fa-moon", "fa-star", "fa-eye", "fa-spider", "fa-feather", "fa-dove", "fa-tachometer-alt"]

// to create one card 
function createCard(className, j) {

    return `
            <div id="${j}" class="iconbox animate__animated">
            <i class=" fas ${className}"></i>
            </div>
            
    `
}





let start = false;
let count = 0;
let intervalId = null;

//clearInterval(intervalId);

function timeCounter() {
    if (start) {
        intervalId = setInterval(() => {
            count++;
            timeBox.innerText = `Timer: ${count} sec`;
        }, 1000)
    }
}

// to create cards dynamically 
function createBoxes() {
    className = className.sort(() => (Math.random() > .5 ? 1 : -1));

    let gameBox = document.createElement('div');
    gameBox.classList.add('iconBoxContainer');
    let allCards = [];
    let j = 1;
    for (let i = 0; i < 16; i++, j++) {

        allCards += createCard(className[i], j);



    }
    gameBox.innerHTML = allCards;
    box.append(gameBox);
}

createBoxes();



let icons = document.querySelector('.iconBoxContainer');
let selectedClasses = [];
let selectedClassesId = [];


// to show the card when clicked on it

function showElementOnClick() {
    console.log(selectedClasses, 'selected classes');
    console.log(selectedClassesId, 'selected classes');
    selectedClassesId.forEach((e, i) => {
        e = document.getElementById(`${(selectedClassesId[i])}`)



        e.firstElementChild.style.display = 'flex';

        console.log({ e })
        console.log(e, 'setting display flex')


    })
    console.log('elements are shown')

}

let firstClicked = null;
let secondClicked = null;

// to hide cards if both card are same
function hideElement() {

    // selectedClassesId.forEach((e, i) => {
    //     e = document.getElementById(`${(selectedClassesId[i])}`)




    //     e.firstElementChild.style.display='none';
    //     console.log(e,'setting display none')


    // })

    console.log('elements are hided')
    firstClicked.style.display = "none";
    secondClicked.style.display = "none";

    firstClicked = null;
    secondClicked = null;

    // if(selectedClasses.length===2){

    //     selectedClasses = [];
    //     selectedClassesId=[];
    // }
}

// global count variables
let matchCount = 0;
let leftCardCount = 16;
let res = document.querySelector('.res')

// Delete the mactched card
function deleteMatchedCard(card) {
    console.log(card);
    matchCount++;
    leftCardCount = leftCardCount - 2;
    if (leftCardCount === 0) {
        res.innerText = `Result:${'Won'}`;
        alert('all card are matched')
    } else {



        let score = document.querySelector('.match')
        score.innerText = `Match Count:${matchCount}`;
        // card.forEach(e => {
        //     console.log(e.parentElement);
        //     e.parentElement.style.visibility = 'hidden'
        // });
        selectedClasses = [];
        selectedClassesId = [];
        console.log(leftCardCount);
    }

}
let timerId = null;
// Check the clicked card are matching
function matchChecker() {

    if (selectedClasses[0] === selectedClasses[1]) {
        console.log('its is match');
        let card = document.querySelectorAll(`.${selectedClasses[0].slice(4).trim()}`)

        // setTimeout(deleteMatchedCard(card) , 1200); ;
        deleteMatchedCard(card)


        timerId = null;
        firstClicked = null;
        secondClicked = null;


    } else {
        console.log('its not a match Please try again')

        timerId = setTimeout(() => {
            hideElement();

            timerId = null;
        }, 600)


    }

    selectedClasses = [];
    selectedClassesId = [];
}
function checkTwoCardsAreSelected() {

    if (selectedClassesId.length === 2 && selectedClasses.length === 2) {
        return true;
    } else {
        return false;
    }
}



// when we click how that should be handled for that click handler
function clickHandler(event) {
    start = true;
    if (!intervalId) {
        timeCounter()
    };

    if (timerId) {
        return;
    }

    console.log({ selectedClasses })
    if (event.target.className === 'iconBoxContainer') {
        alert('please click on right position')

    } else {
        console.log(event.target)
        event.target.classList.add("animate__heartBeat");
        event.target.style.setProperty('--animate-duration', '.5s');

        setTimeout(() => {
            event.target.classList.remove("animate__heartBeat");
        }, 600);

        if (!selectedClassesId.includes(event.target.id) && selectedClasses.length <= 1) {
            selectedClassesId.push(event.target.id);
            selectedClasses.push(event.target.firstElementChild.className.trim())
        }



        if (!firstClicked) {
            firstClicked = event.target.firstElementChild;
            firstClicked.style.display = "flex";

        } else {
            secondClicked = event.target.firstElementChild;
            secondClicked.style.display = "flex";


            console.log({ selectedClasses })

            if (selectedClasses.length === 2) {

                console.log(selectedClasses.length, 'after showing the element');


                matchChecker();
            }
        }





    }

}

// event listener on clicking on any cards
icons.addEventListener('click', clickHandler);
