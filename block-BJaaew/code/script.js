let doc=document.querySelector('.peoples')
let houseBox=document.querySelector('.allPeople')
let allHouseName = document.querySelector('.allHouseName')

let currentHouseName = 'all'

let allHousesMarkup = {}
let allHouseNameMarkup = "";

function createCard (people) {
    return `
    <div class="peopleBox">
        <img class="img" src="${people.image}" />
        <strong class="name">${people.name}</strong>
        <p class="p">${people.description}</p>
        <a class="btn" href="#">Know More! </a>
    </div>
    `
}

function createUI(obj){
obj.houses.forEach(house=>{
    allHouseNameMarkup += createHouseName(house.name)

        let allCards = house.people.map(people=>{
               return createCard(people)
        }).join("")

        allHousesMarkup[house.name] = allCards
    })

}

createUI(got);


allHouseName.innerHTML = allHouseNameMarkup;
allHouseName.addEventListener("click", (e) => {
    addAllCards(e.target.innerText)
})

function addAllCards (param) {

    if(param === "all") {
        let allCards = Object.keys(allHousesMarkup).map(key => allHousesMarkup[key]).join("") 
        doc.innerHTML = allCards;
    } else {
        doc.innerHTML = allHousesMarkup[param]
    }
}

addAllCards(currentHouseName)



function createHouseName(name) {
    return `
    <div class = "allHouse">
        <span class = "house">${name}</span>
    </div>
`
}

let searchByName=document.querySelector('input');

function searchHandler(e){
    if(!e.target.value) {
        addAllCards("all")
    } else {
        let query = e.target.value;

        let allMatched= got.houses.map(house => {
            let arr = house.people.filter(person => person.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

            return arr;
        }).filter(e => e.length)

        let allCards = allMatched.map(arr => arr.map(e=>createCard(e)).join("")).join("")
        doc.innerHTML=allCards;
    }
}

searchByName.addEventListener('input',searchHandler);