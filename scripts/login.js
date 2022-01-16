document.addEventListener("DOMContentLoaded", ()=> {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#createAccountLink").addEventListener("click", () => {
        loginForm.classList.add("hide");
        createAccountForm.classList.remove("hide");
    });

    document.querySelector("#haveAccountLink").addEventListener("click", () => {
        loginForm.classList.remove("hide");
        createAccountForm.classList.add("hide");
    });

    document.querySelector("#loginButton").addEventListener("click", () => {
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        fetch('https://jobysseyapi.herokuapp.com/api/v1/company/login').then(response=>{
            return response.json();
        }).then(json=>{
            console.log(json);
        })
    });
});

