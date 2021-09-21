let gameBox = document.querySelector('.game');

let inputForUser = 0;
let inputForComputer = 1;

const winComposition = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '5', '9'], ['3', '5', '7'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9']];

function createSingleBox(i) {

    return `
           <div id=${i} class="smallBox">
          
           </div>
   `

}

function randomPositionGenerator() {
    let pos = (Math.floor(Math.random() * 10));
    console.log(pos);
    return pos;
}

function createBoxes() {

    let boxContainer = document.createElement('div');
    boxContainer.classList.add('boxContainer');
    let allBox = '';
    for (let i = 1; i <= 9; i++) {

        allBox += createSingleBox(i);


    }
    boxContainer.innerHTML = `${allBox}`;
    gameBox.append(boxContainer);
}


createBoxes();


let userInput = document.querySelector('.boxContainer');


function checkEmptyPostionForComputer() {
    let pos = [];
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(`${i}`).innerText === "") {
            pos.push(i);
        }
    }
    return pos;

}
let userCount = 0;
let compCount = 0;

function getElementId(id) {

    if (document.getElementById(`${id}`).innerText.length === 1) {
        return Number(document.getElementById(`${id}`).id);
    }

}

let userIdArray = [];
let compIdArray = [];
let result=document.querySelector('.res');
let user=document.querySelector('.user');
let comp=document.querySelector('.comp');

function matchedChecker() {
    console.log(winComposition);

    winComposition.forEach(e => {
        console.log(e);
        if (e.length === userIdArray.length || e.length === compIdArray.length) {
            // console.log('its matching')
            console.log('composition', e)
            userIdArray = userIdArray.sort((a, b) => a - b);
            compIdArray = compIdArray.sort((a, b) => a - b);
            console.log('userIdArray', userIdArray.sort((a, b) => a - b));
            if (JSON.stringify(e) === JSON.stringify(userIdArray) || JSON.stringify(e) === JSON.stringify(compIdArray)) {
                if (JSON.stringify(e) === JSON.stringify(userIdArray)) {

                    userCount++;

                    console.log(userCount);
                    setTimeout(() => {
                        user.innerText=userCount;
                        result.innerText='Won'
                      alert('You Won');
                        location.reload();

                    }, 100);
                } else {

                    compCount;
                    console.log(compCount);
                    setTimeout(() => {
                        comp.innerText=compCount;
                        result.innerText='Lost'
                        alert('You Lost');
                        location.reload();

                    }, 100);
                }

            }



        }


    })




}
let usertrigger = 0;



function inputHandler(event) {






    // console.log('no match so enter next element')

    if (event.target.innerText === "") {
        event.target.innerText = inputForUser;
        userIdArray.push(event.target.id);
        if (userIdArray.length === 3) {
            matchedChecker();
        }

        usertrigger++;
        console.log('userIdArray', userIdArray);


    }

    let compPos = checkEmptyPostionForComputer();
    if (compPos.length > 0) {
        compPos = compPos.sort(() => (Math.random() > .5 ? 1 : -1))
        // console.log('compPos',compPos)

        // console.log('randomEmptyPos',compPos[0]);

        let compBox = document.getElementById(`${compPos[0]}`);
        // console.log(compBox)
        if (compBox.innerText === "") {
            usertrigger++
            //    console.log('userTrigger by comp',usertrigger)
            compBox.innerText = inputForComputer;
            compIdArray.push(compBox.id);
            if (compIdArray.length === 3) {
                matchedChecker();
            }
            console.log('computerIdArray', compIdArray);


        } else {
            console.log('Tie up')
        }
    }
    if (userIdArray.length === 5 || compIdArray.length >= 4) {

        setTimeout(() => {
            alert('its a tie');
            location.reload();

        }, 100);

    }


}





userInput.addEventListener('click', inputHandler);





function toTakeInputFromUser() {


}