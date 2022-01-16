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
        event.preventDefault();
        const username = document.getElementById("username").value;
        console.log(username);

        const password = document.getElementById("password").value;
        console.log(password);
    });
});

