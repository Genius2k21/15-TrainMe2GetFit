var timeEl = document.getElementById("#time");
var addClientEl = document.getElementById("add-client");

function createEventListeners(){

    document.addEventListener('load', (event) =>{
        timeEl.innerHTML = formatDate(Now());
        console.log(event);
    })

    addClientEl.addEventListener('onClick', function(e){
        console.log(e);
    })

}

//function to initiate game
function init(){

    console.log("hello");
    createEventListeners();

}
//initialize game start
init();