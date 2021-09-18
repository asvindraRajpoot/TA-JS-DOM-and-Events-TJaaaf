function main() {

    let movie = document.querySelector('form');
    let input = document.querySelector('input');
    let connector = document.querySelector('.connector');

    let movieList = "";
    let div = document.createElement('div');
    div.classList.add('list');

    function movieListHandler(event) {

        event.preventDefault();
        movieList = event.target.elements.movie.value;

        if (movieList.length !== 0) {
            input.value = "";



            let eachDiv = document.createElement('div');
            let li = document.createElement('input');
            let label = document.createElement('label');
            let close = document.createElement('button');
            close.classList.add('close');
            close.innerText = '❌';
            eachDiv.append(li, label, close);
            eachDiv.classList.add('movieBox');
            li.setAttribute('type', 'checkbox');
            li.classList.add('listElement');
            label.innerText = movieList;


            div.append(eachDiv);
            connector.append(div);

            let closebtn = document.querySelectorAll('.close');

            function closebtnHandler(event) {
                let cls = event.target.className;
                let state = event.target.parentElement.firstElementChild.checked;
                if (state === true && cls === 'close') {
                    event.target.parentElement.remove();
                } else {

                }
                console.log(cls, state)
            }


            closebtn.forEach(n => addEventListener('click', closebtnHandler))

        }
    }
    movie.addEventListener('submit', movieListHandler);

}
main();