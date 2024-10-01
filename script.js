
const firstName = document.getElementById('first-name').value;
const lastName = document.getElementById('last-name').value;
const errorMessage = document.getElementById('errorMessage');
const passWord  = document.getElementById('password').value;
const lastNameError =document.getElementById('lname-error')
const firstNameError =document.getElementById('fname-error')
const passWordError =document.getElementById('password-error')
const form   = document.getElementById('form');
form.addEventListener('submit',e=>{
    e.preventDefault();
     validateForm();
})


function validateForm(){
if(firstName===""){
    firstNameError.textContent= "please first name is required"
}
if(lastName==""){
    lastNameError.textContent = "please last name is required"
}
}