document.addEventListener("DOMContentLoaded", ()=> {
    const add = document.querySelector(".add");
    const cancel = document.querySelector(".cancel");
    const push = document.querySelector(".push");
    var selection = document.querySelector(".selection");

    add.addEventListener('click', () => {
        if (selection.style.display === 'none') {
            selection.style.display = 'inline';
        }
    });

    cancel.addEventListener('click', () => {
        selection.style.display = 'none';
    });

    push.addEventListener('click', () => {
        // push to database and display
        selection.style.display = 'none';
    });


});





