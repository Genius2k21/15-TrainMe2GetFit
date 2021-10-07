
const addClient = async() => {

        window.location.replace("/addclient");   
};

const viewClient = async(event) => {
    event.preventDefault();
    //console.log(event.target);
    var element = event.target;
    
    var clientid = element.getAttribute("data-clientid");
    console.log(clientid);
    window.location.replace("/api/client/4/"+clientid);
    // const pageResponse = await fetch('/clientView', {
    //     method: 'GET'
    // });
    
};

document.querySelector('#add-client').addEventListener('click', addClient);
document.querySelector('#view-client').addEventListener('click', viewClient);
