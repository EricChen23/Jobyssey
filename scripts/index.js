document.addEventListener("DOMContentLoaded", ()=> {
    const add = document.querySelector(".add");
    const push = document.querySelector(".push");
    const displayDiv = document.querySelector(".display");
    var selection = document.querySelector(".selection");
    const error = document.querySelector(".comp_error");
    
    var arr = [];

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
        const comsel = document.querySelector(".cominput");
        const comp = comsel.value.toUpperCase();
        var appCount = 0;
        var interviewCount = 0;
        

        if (comp === "") {
            error.style.display = 'inline';
            error.innerHTML = "Company name cannot be empty";
            return;
        }


        const appCountID = comp.concat("app");
        const intCountID = comp.concat("int");

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
                        appCount = obj.applications;
                        interviewCount = obj.interviews;
                        break;
                    }
                }
            }

            var displayed = false;

            if (exist) {
                var str = "https://jobysseyapi.herokuapp.com/api/v1/company/".concat(comp, "/0");
                fetch(str, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'}
                });
                for(var i = 0; i < arr.length; i++) {
                    if (arr[i].toUpperCase().localeCompare(comp) == 0) {
                        displayed = true;
                        const a = document.getElementById(appCountID);
                        a.innerHTML = "Number of Applications: ".concat(appCount + 1);
                        break;
                    }
                }
            } else {
                var str = "https://jobysseyapi.herokuapp.com/api/v1/company/company/";

                let data = {name: comp, applications: 1, interviews: 0};

                fetch(str, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                });
                appCount = 1;
            }

            if (!displayed) {
                arr.push(comp);
                selection.style.display = 'none';
                add.innerHTML = "Add new application";
        
                const newDiv = document.createElement("div");
                const newComp = document.createElement("p");
                const numApp = document.createElement("p");
                const numInt = document.createElement("p");
                const interview = document.createElement("p");
                const buttons = document.createElement("div");
                const checkBtn = document.createElement("button");
                const crossBtn = document.createElement("button");
                

                newComp.innerHTML = comp;
                numApp.innerHTML = "Number of Applications: ".concat(appCount);
                numInt.innerHTML = "Number of Interviews: ".concat(interviewCount);
                interview.innerHTML = "Interview?"
        
                
                buttons.appendChild(checkBtn);
                buttons.appendChild(crossBtn);
                newDiv.appendChild(newComp);
                newDiv.appendChild(numApp);
                newDiv.appendChild(numInt);
                newDiv.appendChild(interview);
                newDiv.appendChild(buttons);
        
        
                buttons.classList.add("buttons");
                checkBtn.classList.add("check");
                crossBtn.classList.add("cross");
                interview.classList.add("inter");
                newComp.classList.add("newComp");
                newDiv.classList.add('display-cell');

                numApp.setAttribute('id', appCountID);
                numInt.setAttribute('id', intCountID);

                checkBtn.setAttribute('id', comp);
                crossBtn.setAttribute('id', comp);

                const newDivAttr = comp.concat("id");
                newDiv.setAttribute('id', newDivAttr);
                displayDiv.appendChild(newDiv);
            }
        })

        
    });



});





