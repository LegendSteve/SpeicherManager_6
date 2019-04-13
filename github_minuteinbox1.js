//Variablen
var link_seite = "file:///C:/Users/Stefan/Documents/Programmieren/Speicher%20Manager%20123/Seite/index.html";

//Event-Listener

getEmail();

function getEmail(){
    var email = $("#email").html();
    alert(email);
    window.opener.postMessage("Email: "+email, link_seite);
    window.close();
}

function getZahl(){

}



