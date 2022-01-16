document.addEventListener("DOMContentLoaded", ()=> {
    const add = document.querySelector(".add");
    const push = document.querySelector(".push");
    const displayDiv = document.querySelector(".display");
    var selection = document.querySelector(".selection");
    const error = document.querySelector(".comp_error");

    add.addEventListener('click', () => {
        if (selection.style.display === 'none') {
            selection.style.display = 'inline';
            error.style.display = 'none';
            add.innerHTML = "Cancel";
        } else {
            selection.style.display = 'none';
            add.innerHTML = "Add new application";
        }

    });

    push.addEventListener('click', () => {
        // push to database and display
        /*
        
        */

        const comsel = document.querySelector(".cominput");
        const comp = comsel.value.toUpperCase();

        if (comp === "") {
            error.style.display = 'inline';
            error.innerHTML = "Company name cannot be empty";
            return;
        }

        fetch('https://jobysseyapi.herokuapp.com/api/v1/company/getCompany').then(response=>{
            return response.json();
        }).then(json=>{
            var exist = false;
            for(var i = 0; i < json.length; i++) {
                var obj = json[i];
                console.log(obj);
                var name = obj.name;
                if (name != null) {
                    name = name.toUpperCase();
                    if (name.localeCompare(comp) == 0) {
                        exist = true;
                        break;
                    }
                }
            }

            if (exist) {
                var str = "https://jobysseyapi.herokuapp.com/api/v1/company/".concat(comp, "/0");
                fetch(str, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'}
                });
            } else {
                var str = "https://jobysseyapi.herokuapp.com/api/v1/company/company/";

                let data = {name: comp, applications: 1, interviews: 0};

                fetch(str, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                });

                selection.style.display = 'none';
                add.innerHTML = "Add new application";
        
                const newDiv = document.createElement("div");
                const newComp = document.createElement("p");
                const interview = document.createElement("p");
                const buttons = document.createElement("div");
                const checkBtn = document.createElement("button");
                const crossBtn = document.createElement("button");
        
                newComp.innerHTML = comp;
                interview.innerHTML = "Interview?"
        
                
                buttons.appendChild(checkBtn);
                buttons.appendChild(crossBtn);
                newDiv.appendChild(newComp);
                newDiv.appendChild(interview);
                newDiv.appendChild(buttons);
        
        
                buttons.classList.add("buttons");
                checkBtn.classList.add("check");
                crossBtn.classList.add("cross");
                interview.classList.add("inter");
                newComp.classList.add("newComp");
                newDiv.classList.add('display-cell');
                displayDiv.appendChild(newDiv);
            }
        })

        
    });



});





