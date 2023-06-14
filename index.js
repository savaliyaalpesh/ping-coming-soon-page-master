
const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    e.preventDefault();

    const email = form['email'];
    const emailValue = email.value;
    const small = form.querySelector('small');

    if(!emailValue){
        email.classList.add('error'); 
        small.innerText = 'Email field cannot be blank';
        small.style.display = 'inline-block';
    }else if(!isValidEmail(emailValue)){
        email.classList.add('error'); 
        small.innerText = 'Email is invalid';
        small.style.display = 'inline-block';  
    }else{
        email.classList.remove('error'); 
        small.innerText = '';
        small.style.display = 'none';
    }
})

return re.test(String(email).tolowerCase());