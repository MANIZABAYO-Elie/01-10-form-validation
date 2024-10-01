
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
 // Email validation
//  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//  if (email === '') {
//      errorMessage.textContent = 'Email is required.';
//      return false;
//  } else if (!email.match(emailPattern)) {
//      errorMessage.textContent = 'Please enter a valid email address.';
//      return false;
//  }

 // Password validation
 if (passWord === '') {
    passWordError.textContent = 'Password is required.';
     return false;
 } else if (passWord.length < 6) {
     passWordError.textContent = 'Password must be at least 6 characters long.';
     return false;
 }

 alert('Form submitted successfully!');
 return true;
}
