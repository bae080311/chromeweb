
    const loginform = document.querySelector("form");
    const loginInput = document.querySelector("form input");
    const greeting = document.querySelector("#greet");
    
    const Hidden = "hidden";
    const usernamekey = "username";
    
    function LoginSubmit(event) {
        event.preventDefault();
        const username = loginInput.value;
        localStorage.setItem(usernamekey, username);
        loginform.classList.add(Hidden);
        paintgreetings();
    }
    
    
const Saveusername = localStorage.getItem(usernamekey);

if (Saveusername === null){
    loginform.classList.remove(Hidden);
    loginform.addEventListener("submit", LoginSubmit); 
} else {
    paintgreetings();
}
function paintgreetings()
{
    const username = localStorage.getItem(usernamekey);
    greeting.classList.remove(Hidden);
    greeting.innerText = "Hello " + username
}