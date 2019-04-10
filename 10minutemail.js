/*script = document.createElement("script");
script.innerHTML = "function receiveMessage(event){if(event.data != 'Zahl bekommen')return;var zahl = $('tr').find('td:contains('Verwenden Sie zum Bestätigen Ihrer E-Mail-Adresse den folgenden Sicherheitscode: ')').children()[0].innerHTML; event.source.postMessage('Zahl: '+zahl, event.origin); window.close();} window.addEventListener('message', receiveMessage, false);";
document.body.appendChild(script);*/

function receiveMessage(event){
    if(event.data != 'Zahl bekommen')
    return;
    
    var zahl = 06702065552;
    event.source.postMessage('Zahl: '+zahl, event.origin);
    window.close();
}

window.addEventListener('message', receiveMessage, false);

//https://raw.githack.com/LegendSteve/SpeicherManager_1/master/10minutemail.js