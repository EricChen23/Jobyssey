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

document.getElementById("register").addEventListener("click", () => {
    const username = document.getElementById("newUsername").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if(password != confirmPassword){
        
    }
    fetch("https://jobysseyapi.herokuapp.com/api/v1/company/".concat(username, "/", password)).then(response=>{
        return response.json();
    }).then(json=>{
        if(json['username'] != "fake"){
            window.location.replace("../html/index.html");
        }
    })
});

document.getElementById("loginButton").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetch("https://jobysseyapi.herokuapp.com/api/v1/company/".concat(username, "/", password)).then(response=>{
        return response.json();
    }).then(json=>{
        if(json['username'] != "fake"){
            window.location.replace("../html/index.html");
            localStorage.setItem("application", json['applications']);
            localStorage.setItem("interview", json['interviews']);
        } else {
            document.getElementById("loginError").classList.remove("hide");
        }
    })
});