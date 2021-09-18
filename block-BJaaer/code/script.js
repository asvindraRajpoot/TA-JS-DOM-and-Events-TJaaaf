let form =document.querySelector('form');
let secondForm=document.querySelector('.secondForm');


function formHandler(event){
    event.preventDefault();
   let formData= {name:"",}
    formData.name=event.target.elements.name.value;
    formData.email=event.target.elements.email.value;
    formData.love=event.target.elements.gender.value;
    formData.color=event.target.elements.color.value;
    formData.rating=event.target.elements.rating.value;
    formData.category=event.target.elements.drone.value;
    formData.terms=event.target.elements.terms.checked;
    firstForm.style.display='none'
    secondForm.style.display='block'

    let div= document.createElement('div');
    let h1=document.createElement('h1');
    h1.innerText= `Hello ${formData.name}`; 
    let address=document.createElement('address');
    address.innerText=`Email: ${formData.email}`;
    let love=document.createElement('li');
    love.innerText=`Your Love: ${formData.love}`
    let color=document.createElement('li');
    color.innerText=`Color: ${formData.color}`;
    let rating=document.createElement('li');
    rating.innerText=`Rating: ${formData.rating}`;
    let category=document.createElement('li');
    category.innerText=`Book Genre: ${formData.category}`;
    let terms=document.createElement('p');
    console.log(formData.terms)
    if(formData.terms===true){
        terms.innerText=`👉You agree to Terms and Conditions ✅`;  
    }else{
        terms.innerText=`👉You do not agree to Terms and Conditions ❌`;  
    }
    
    let btn=document.createElement('button');
    btn.classList.add('close');

    function closeHandler(){
        firstForm.style.display='block';
        secondForm.style.display='none' 
    }
    btn.addEventListener('click', closeHandler)

    div.prepend(btn);
    btn.style.display='flex'
    btn.style.justifyContent='flex-end';
    btn.innerText='Close'
    div.append(h1,address,love,color,rating,category,terms);
    div.classList.add('userForm');



function closeHandler(){
    firstForm.style.display='block';
    secondForm.style.display='none' 
}
secondForm.append(div);
}

let firstForm =document.querySelector('.firstForm');


form.addEventListener('submit',formHandler);