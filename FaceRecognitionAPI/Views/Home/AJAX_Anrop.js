
var callFace = document.getElementById("callFace");
var outputText = document.getElementById("resultatText");

callFace.addEventListener(

    "click",    // Argument 1 till metoden/händelsen addEventListner, object.addEventListener( Arggument1, Argument2);

    function () // Argument 2 till metoden/händelsen addEventListner, function(){...}
    {

    var xhr = new XMLHttpRequest(); //Se fördjupad dokumentation för detta AJAX eller snarare ett AJAJ anrop anrop, https://msdn.microsoft.com/en-us/library/ms535874(v=vs.85).aspx
    if (!xhr) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    xhr.open('GET', '/api/FaceNewApi');
    xhr.send(null);

    xhr.timeout = 2000;

    xhr.onload = function () {
                                var face = JSON.parse(xhr.responseText);
                                outputText.innerHTML = face[0];
                             };

    xhr.ontimeout = function (e) { outputTemp.innerHTML = "Time exceded 2 seconds. Försök igen."; }
}
);