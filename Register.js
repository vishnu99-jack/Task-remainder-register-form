const form = document.querySelector('#form');
const uname = document.querySelector('#uname');
const email= document.querySelector('#email');
const pass = document.querySelector('#pass');
const cpass = document.querySelector('#cpass');
let s = true;
form.addEventListener('submit',(e)=>{
    if(!validateInput()){
        e.preventDefault();
    }
   
    
});

function validateInput(){
    const unameVal = uname.value.trim();
    const emailVal = email.value.trim();
    const passVal = pass.value.trim();
    const cpassVal = cpass.value.trim();
    

    if(unameVal === ''){
       s = false;
        setError(uname,'Username is required');
    }else{
        setSuccess(uname);
    }

    if(emailVal===''){
        s = false;
        setError(email,"Email is required");
    }else if(!validateEmail(emailVal)){
        s = false;
        setError(email,'Enter a valid email');
    }else{
        setSuccess(email);
    }

    if(passVal===''){
        s = false;
        setError(pass,'Password is required');
    }else if(passVal.length < 8 ){
        s = false;
        setError(pass,'Password must be atleast 8 characters');
    }else{
        setSuccess(pass);
    }

    if(cpassVal===''){
        s = false;
        setError(cpass,'Please enter your password again');
    }else if(cpassVal !== passVal ){
        s = false;
        setError(cpass,'Password does not match');
    }else{
        setSuccess(cpass);
    }

    return s;

}

function setError(element, msg){
// Instead of searching the class error div in the whole html document
// We check only for the given specific div element(like id = uname div, id = email div etc...)
// In that element div alone we get the error div and modify it.

const specific_DIV = element.parentElement; // get the parent class of given element
const errorElement = specific_DIV.querySelector('.error')// Instead of checking document we check only in the parent class div for accessing the respective error

errorElement.innerText = msg;
specific_DIV.classList.add('error');
specific_DIV.classList.remove('success');


}

function setSuccess(element){

const specific_DIV = element.parentElement; 
const errorElement = specific_DIV.querySelector('.error')
errorElement.innerText = '';
specific_DIV.classList.add('success');
specific_DIV.classList.remove('error');

}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
