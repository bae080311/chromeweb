const loginform = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");


function LoginSubmit(tomato)
{
    tomato.preventDefault();        
    console.log(tomato);
}



loginform.addEventListener("submit", LoginSubmit);