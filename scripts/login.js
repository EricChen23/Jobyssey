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
});

