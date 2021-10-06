
const addClient = async() => {

        window.location.replace("/addclient");   
};

const viewClient = async(event) => {
    event.preventDefault();
    //console.log(event.target);
    var element = event.target;
    
    var clientid = element.getAttribute("data-clientid");
    window.location.replace("/api/client/4/"+clientid);
};

document.querySelector('#add-client').addEventListener('click', addClient);
document.querySelector('#view-client').addEventListener('click', viewClient);
