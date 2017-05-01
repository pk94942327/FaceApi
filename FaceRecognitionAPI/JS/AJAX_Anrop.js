﻿// Knapparna till val av ansiktsbild
var callFace1 = document.getElementById("callFace1"); // Picture1 knappen
var callFace2 = document.getElementById("callFace2"); // Picture2 knappen
var callFace3 = document.getElementById("callFace3"); // Picture3 knappen
var callFace4 = document.getElementById("callFace4"); // Picture4 knappen
var callFace5 = document.getElementById("callFace5"); // Picture5 knappen
var callFace6 = document.getElementById("callFace6"); // Dog knappen
var callFace7 = document.getElementById("callFace7"); // URL fältet läses in.

var submitPicture = document.getElementsByName("submitPicture"); //Alla bild-knapparna har gets namnet submitPicture för att kunna användas till händelsen klicka på en bild-knapp.

var inputImgUrl = document.getElementById("imageUrl"); // Inmatningsfältet för URL där länken till ansikten skrivs in har id = "imageUrl".
var outputImg = document.getElementById("Picture"); // Jag vill komma åt fältet < img id = "Picture" src="" /> på Index.cshtml för att 'dynamiskt' fylla i src="" beroende på vad användaren skriver in i URL-inmatningsfältet.
var getFaceDataButton = document.getElementById("faceUrl"); // När användaren trycker på [Get Face Data :-)] knappen med id = "faceUrl" ska funktionen med AJAX anropas.

callFace1.addEventListener("click", function () { var face1 = accessImgData(callFace1.name) });
callFace2.addEventListener("click", function () { var face2 = accessImgData(callFace2.name) });
callFace3.addEventListener("click", function () { var face3 = accessImgData(callFace3.name) });
callFace4.addEventListener("click", function () { var face4 = accessImgData(callFace4.name) });
callFace5.addEventListener("click", function () { var face5 = accessImgData(callFace5.name) });
callFace6.addEventListener("click", function () { var face6 = accessImgData(callFace6.name) });
callFace7.addEventListener("click", function () { var face7 = accessImgData(inputImgUrl.value) });

function accessImgData(callFace) {
    var c = document.getElementById("resultImage")
    var ctx = c.getContext("2d");
    var img = new Image();
    img.src = callFace;
    img.onload = function () {
        ctx.drawImage(img, 10,10, 360, 280)
    };

    var xhr = new XMLHttpRequest();
    xhr.open('Get', '/api/FaceNewApi/?URL=' + callFace, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;
            alert("Eye left coord: " + response)
        }
    }
    xhr.send();



}

/*

/*
getFaceDataButton.addEventListener(
    "click",    // Argument 1 till metoden/händelsen addEventListner, object.addEventListener( Arggument1, Argument2);

    function () // Argument 2 till metoden/händelsen addEventListner, function(){...}
    {
        outputImg.src = inputImgUrl.value; // Tilldela innehållet src="" som är en URL till bilden i < img id = "Picture" src="" /> så att det står src="https://www.imageToFace.jpg" istället för null strängen "".
        // Förhoppningsvis ska bilden visas.
        accessImgData(inputImgUrl.value); // Hämta data från AI tjänsten api.oxfordproject.com
    });
*/
/*
function accessImgData(callFace) {
    URL = callFace;
    */
/*
    var xhr = new XMLHttpRequest();
    //Se fördjupad dokumentation för detta AJAX eller snarare ett AJAJ anrop anrop, https://msdn.microsoft.com/en-us/library/ms535874(v=vs.85).aspx
    // Se också grundläggande förklaring om XMLHTTPRequest() https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
        if (!xhr) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
    /*
            //xhr.open('GET', '/api/FaceNewApi');
      
            open(method,url,async,user,psw)	Specifies the request

            method: the request type GET or POST
            url: the file location
            async: true (asynchronous) or false (synchronous)
            user: optional user name
            psw: optional password
    */
    /*
        xhr.open('Get', '/api/FaceNewApi/?URL='+callFace,true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {//Call a function when the state changes.
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        }
        xhr.send();
*/
    /*   Se kodraden URL = callFace;
         send()	Sends the request to the server. Used for GET requests
         send(string)	Sends the request to the server. Used for POST requests
         Intellisence säger att URL är en "(global variable)Element URL".
    */
        //xhr.timeout = 2000;



    /*
        xhr.onload = function () {
            var face = JSON.parse(xhr.responseText);
    /*
            responseText -> Returns the response data as a string
            responseXML -> Returns the response data as XML data
            JSON.parse(...) Convert responseText to JSON format.       
            xhr.onload = function () { var face = xhr.responseText; outputText.innerHTML = face; };
            console.log(face); 
            Kollar bara vad som kommer ut ur face.
    */
 /*           xhr.ontimeout = function (e) { outputTemp.innerHTML = "Time exceded 2 seconds. Försök igen."; }
            return face;
        }
        return xhr.onload;
}*/