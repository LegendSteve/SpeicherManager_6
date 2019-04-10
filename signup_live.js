function Text_Eingeben(element_id, text){
    //Das Element fokussieren
    $("#"+element_id).focus();
    $("#"+element_id).click();

    //Variablen für KeyDown/Up
    var kdown = jQuery.Event("keydown");
    var kup = jQuery.Event("keyup");

    //Den Text zu einem Array aus einzelnen Buchstaben machen
    var text_array = text.split("");
    console.log(text_array);

    //Durch alle Buchstaben gehen
    for(i = 0; i < text_array.length; i++){

        //Den Keycode des Buchstaben herausfinden & dem KeyDown/Up sagen
        var code = text_array[i].charCodeAt(0);
        kdown.which = code;
        kup.which = code;

        //KeyDown auslösen
        $("#"+element_id).trigger(kdown);
        //Es auch wirklich hinschreiben
        $("#"+element_id).change();
        document.getElementById(element_id).value += text_array[i];
        //KeyUp auslösen
        $("#"+element_id).trigger(kup).delay(1000);        
    }
    $("#"+element_id).blur();
}

function Select_Auswählen(element_id, value){
    $("#"+element_id).val(value).change();
    return true;
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
   
function random_zahl(minimum, maximum){
    zahl = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    console.log(zahl);
    return zahl;
}

async function Eingeben(){
    await sleep(random_zahl(1500, 5000));
    $("#iSignupAction").click();
    await sleep(random_zahl(1500, 5000));
    Text_Eingeben("PasswordInput","awd9812zHADhao");
    await sleep(random_zahl(1500, 5000));
    $("#iSignupAction").click();
    await sleep(random_zahl(1500, 5000));
    Text_Eingeben("FirstName", "Mohammed");
    await sleep(random_zahl(1500, 5000));
    Text_Eingeben("LastName", "Mahghandi");
    await sleep(random_zahl(1500, 5000));
    $("#iSignupAction").click();
    await sleep(random_zahl(1500, 5000));
    Select_Auswählen("BirthDay", random_zahl(1, 30))
    await sleep(random_zahl(500, 2000));
    Select_Auswählen("BirthMonth", random_zahl(1, 12))
    await sleep(random_zahl(500, 2000));
    Select_Auswählen("BirthYear", random_zahl(1980, 1999))
    await sleep(random_zahl(1500, 5000));
    $("#iSignupAction").click();
    await sleep(10000);
    getZahl();
    Text_Eingeben("VerificationCode", zahl);
}

function receiveMessage(event){
    if(event.data.includes("Zahl: ") == false)
    return;
    var zahl = event.data.replace("Zahl: ", "");
    sessionStorage.setItem("zahl",zahl);
    setZahl();
}

window.addEventListener("message", receiveMessage, false);

function setZahl(){
    var zahl = sessionStorage.getItem("zahl");
} 

async function getZahl(){
    popup = window.open("https://10minutemail.com");   
    await sleep(8000);
    window.postMessage("Zahl bekommen", "https://10minutemail.com");
}

//var zahl = $('tr').find('td:contains("Verwenden Sie zum Bestätigen Ihrer E-Mail-Adresse den folgenden Sicherheitscode: ")').children()[0].innerHTML;
//https://raw.githack.com/LegendSteve/SpeicherManager_1/master/signup_live.js