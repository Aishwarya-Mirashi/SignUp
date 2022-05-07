
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

//setFormMessage(loginForm, "success", "You are logged in!");

function clearInputError(inputElement) {
    inputElement.classList.remove(".form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
document.addEventListener("DOMContentLoaded", ()=> {
    const loginForm = document.querySelector("#login");
    const CreateAccountForm = document.querySelector("#CreateAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        CreateAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        CreateAccountForm.classList.add("form--hidden");
    });

    /*loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //perform ajax/fetch login

        setFormMessage(loginForm, "error", "Inavlid username/password combination");
    })*/

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be atleast 10 characters"); 
            }
        });

        inputElement.addEventListener("input", e=> {
            clearInputError(inputElement);
        });
    });
});