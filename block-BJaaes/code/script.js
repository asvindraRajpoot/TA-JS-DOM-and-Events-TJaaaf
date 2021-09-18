let form=document.querySelector('form');


let usernameError="";
let nameError="";
let emailError="";
let phoneError="";
let confirmPasswordError="";
function submitHandler(event){
    
    event.preventDefault();
    let username=event.target.elements.username;
    let name=event.target.elements.name;
    let email=event.target.elements.email;
    let phone=event.target.elements.number;
    let password=event.target.elements.password;
    let confirmPassword=event.target.elements.confirmPassword;
   
    let a=0;

    if(username.value.length<4){
        usernameError=`Username can be less than 4 character`
       username.nextElementSibling.innerText=usernameError
    }else{
        usernameError=""
        username.nextElementSibling.innerText=usernameError
        a++;

    }
    if(name.value.split('').some(ele=>Number(ele))){
        nameError=`You can't use number in the name field`
        name.nextElementSibling.innerText=nameError
    }else{
        nameError=""
        name.nextElementSibling.innerText=nameError
        a++;
    }
    if(email.value.length<6){
        emailError=`Not a valid email`;
        email.nextElementSibling.innerText=emailError
    }else if(!email.value.includes('@')){
        emailError=`Not a valid email`;
        email.nextElementSibling.innerText=emailError
    }
    else{
        emailError=""
        email.nextElementSibling.innerText=emailError
        a++
    }
    if(phone.value.length<7){
        phoneError=`Phone number can only contain numbers`;
        phone.nextElementSibling.innerText=phoneError;
    }else{
        phoneError="";
        phone.nextElementSibling.innerText=phoneError;
        a++
    }
    if(password.value!==confirmPassword.value){
        passwordError=`Password must be same`;
        password.nextElementSibling.innerText=passwordError;
    }else{
        passwordError=""
        password.nextElementSibling.innerText=passwordError;
        a++
    }
    
 if(a===5){
     alert('User Added Successfully');
 }
 
}



form.addEventListener('submit',submitHandler);