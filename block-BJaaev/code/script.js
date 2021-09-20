
let inputText = document.querySelector(`input[type='text']`);
let root = document.querySelector('.todosList');

let allTodos = JSON.parse(localStorage.getItem('allTodos')) || [];



function handleInput(event) {
    let value = event.target.value;
    if (event.keyCode === 13 && value !== "") {
        let todo = {
            name: value,
            isDone: false,
        };
        allTodos.push(todo);
        localStorage.setItem('allTodos', JSON.stringify(allTodos));
        event.target.value = "";
        createUI(allTodos, root);

    }
}
function handleDelete(event) {

    console.log(event.target)
    let id = event.target.dataset.id;
    allTodos.splice(id, 1);
    localStorage.setItem('allTodos', JSON.stringify(allTodos));
    createUI(allTodos, root);
}
function handleToggle(event) {

    let id = event.target.dataset.id;

    allTodos = allTodos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo);
    createUI(allTodos, root);
    localStorage.allTodos = JSON.stringify(allTodos);


}




function handleActive() {

    let arr = allTodos.filter(todo => !todo.isDone);
    createUI(arr);


}
function handleAll() {

    createUI();


}
function handleCompleted() {


    let arr = allTodos.filter(todo => todo.isDone);

    createUI(arr);

}



function createFooter() {



    let footer = document.createElement('div');
    footer.classList.add('footer');
    let all = document.createElement('button');




    all.innerText = 'All'
    all.classList.add('all', 'btn');
    let active = document.createElement('button');
    active.innerText = 'Active'
    active.classList.add('active', 'btn');
    let completed = document.createElement('button');
    completed.innerText = 'Completed'
    completed.classList.add('completed', 'btn');




    footer.append(all, active, completed);
    if (allTodos.find(e => e.isDone === true)) {
        let clear = document.createElement('button');
        clear.innerText = 'Clear completed';
        clear.classList.add('clear');
        footer.append(clear);
    }

    footer.addEventListener('click', (event) => {

        let className = event.target.className;

        switch (true) {
            case className.includes('all'):
                handleAll();
                break;
            case className.includes('active'):
                handleActive();
                break;
            case className.includes('completed'):
                handleCompleted();
                break;
            case className.includes('clear'):
                allTodos = [];
                createUI(allTodos);
                localStorage.allTodos = JSON.stringify(allTodos);
                break;
            default:
                break;




        }
    })

    root.append(footer)

}


function createUI(data = allTodos, rootElm = root) {
    rootElm.innerHTML = "";
    data.forEach((todo, index) => {
        let div = document.createElement('div');
        div.classList.add('list');
        let checkbox = document.createElement('input');
        checkbox.classList.add('check');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.isDone;
        checkbox.addEventListener('input', handleToggle);
        checkbox.setAttribute('data-id', index);

        let p = document.createElement('p');
        p.classList.add('para');
        p.innerText = todo.name;
        let div2 = document.createElement('div');
        div2.append(checkbox, p);
        div2.classList.add('start');
        let small = document.createElement('small');
        small.classList.add('close');
        small.innerText = '❌';
        small.setAttribute('data-id', index);
        small.addEventListener('click', handleDelete);



        div.append(div2, small);
        rootElm.append(div);
        div.append(div2, small);


    });
    if (allTodos.length > 0) {
        createFooter();
    }


}
createUI(allTodos, root);

inputText.addEventListener('keyup', handleInput);
