const logregBox=document.querySelector('.logreg-box');
const logLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');


registerLink.addEventListener('click',()=>{
    logregBox.classList.add('active');
});


logLink.addEventListener('click',()=>{
    logregBox.classList.remove('active');
});