//Variablen
var link_seite = "file:///C:/Users/Stefan/Documents/Programmieren/Speicher%20Manager%20123/Seite/index.html";

//Event-Listener


//Funktionen
function getEmail(){
    var email = $("#email").html();
    window.opener.postMessage("Email: "+email, link_seite);
    window.close();
}

function getZahl(){

}



