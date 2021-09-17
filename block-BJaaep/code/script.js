
function mainWithoutDeligation() {
    let box = document.querySelectorAll('.noDeligation .box');
    let count = 0;

    function handler(elm, i) {

        elm.innerText = i;
    }
    function clearbox(elm, i) {
        elm.innerText = "";

    }


    box.forEach((elm, i) => {

        elm.addEventListener('click', function () {
            handler(elm, i + 1);
            setTimeout(function () {
                clearbox(elm, i);
            }, 5000);



        });
    })
}
mainWithoutDeligation();


function mainWithDeligation() {
    let box = document.querySelector('.wrapper .Deligation ');

    box.addEventListener('click', (event) => {

        let text = event.target.dataset.text;

        
        event.target.innerText = text;
        setTimeout(function () { event.target.innerText = "" }, 5000);

    });

}
mainWithDeligation();