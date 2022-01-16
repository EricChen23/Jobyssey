document.addEventListener("DOMContentLoaded", ()=> {
    const add = document.querySelector(".add");
    const push = document.querySelector(".push");
    const displayDiv = document.querySelector(".display");
    var selection = document.querySelector(".selection");

    add.addEventListener('click', () => {
        if (selection.style.display === 'none') {
            selection.style.display = 'inline';
            add.innerHTML = "Cancel";
        } else {
            selection.style.display = 'none';
            add.innerHTML = "Add new application";
        }

        
        fetch('https://jobysseyapi.herokuapp.com/api/v1/company/getCompany').then(response=>{
            console.log(response);
        })
    });

    push.addEventListener('click', async () => {
        // push to database and display
        /*
        
        */
        selection.style.display = 'none';
        add.innerHTML = "Add new application";

        const newDiv = document.createElement("div");
        const newComp = document.createElement("p");
        const newPos = document.createElement("p");
        const interview = document.createElement("p");
        const buttons = document.createElement("div");
        const checkBtn = document.createElement("button");
        const crossBtn = document.createElement("button");

        const comsel = document.querySelector(".comselect");
        const possel = document.querySelector(".posselect");

        const comp = comsel.options[comsel.selectedIndex].text;
        const pos = possel.options[possel.selectedIndex].text;

        newComp.innerHTML = comp;
        newPos.innerHTML = pos;
        interview.innerHTML = "Interview?"

        
        buttons.appendChild(checkBtn);
        buttons.appendChild(crossBtn);
        newDiv.appendChild(newComp);
        newDiv.appendChild(newPos);
        newDiv.appendChild(interview);
        newDiv.appendChild(buttons);


        buttons.classList.add("buttons");
        checkBtn.classList.add("check");
        crossBtn.classList.add("cross");
        interview.classList.add("inter");
        newComp.classList.add("newComp");
        newDiv.classList.add('display-cell');
        displayDiv.appendChild(newDiv);
    });



});





