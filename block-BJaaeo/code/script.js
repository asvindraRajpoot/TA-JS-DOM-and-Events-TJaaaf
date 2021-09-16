function calc(){



let evl = document.querySelector('.evl');
let input = document.querySelector('.input');
let equal = document.querySelector('.equal');

function inputHandler(event) {
    let inValue = (event.target.innerText).toString();
    console.log(inValue);
    if (inValue === '=') {
        equalHandler();
    } else if (inValue === 'c' || inValue === 'C') {
        evl.innerText = "0";
    }
    else {
        inValue = inValue.concat();
        console.log(inValue, 'value:')
        evl.innerText = evl.innerText + inValue.toString();
    }
}
function equalHandler(event) {

    console.log(evl.innerText, 'in equal');

    if (evl.innerText.startsWith('0') && evl.innerText.length > 1) {
       
        evl.innerText = (evl.innerText).replace((evl.innerText).charAt(0), "");

    } else {
        evl.innerText = eval((evl.innerText));
    }
}
equal.addEventListener('click', equalHandler);
input.addEventListener('click', inputHandler);

}
calc();