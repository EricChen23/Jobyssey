document.addEventListener("DOMContentLoaded", ()=> {
    const add = document.querySelector(".add");
    const push = document.querySelector(".push");
    var selection = document.querySelector(".selection");

    add.addEventListener('click', () => {
        if (selection.style.display === 'none') {
            selection.style.display = 'inline';
            add.innerHTML = "Cancel";
        } else {
            selection.style.display = 'none';
            add.innerHTML = "Add new application";
        }
    });

    push.addEventListener('click', () => {
        // push to database and display
        selection.style.display = 'none';
    });


});





