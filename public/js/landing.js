let timeEl = document.getElementById("time");
let addClientEl = document.getElementById("add-client");

function createEventListeners(){

    document.addEventListener('load', (event) =>{
        timeEl.innerHTML = formatDate(Now());
        console.log(event);
    });

    addClientEl.addEventListener('click',(event) =>{
        console.log(event);
    });

}

//function to initiate game
function init(){

    console.log("hello");
    createEventListeners();

}

 
//initialize game start
init();