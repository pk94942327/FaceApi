// Knapparna till val av ansiktsbild
var callFace1 = document.getElementById("callFace1"); // Picture1 knappen
var callFace2 = document.getElementById("callFace2"); // Picture2 knappen
var callFace3 = document.getElementById("callFace3"); // Picture3 knappen
var callFace4 = document.getElementById("callFace4"); // Picture4 knappen
var callFace5 = document.getElementById("callFace5"); // Picture5 knappen
var callFace6 = document.getElementById("callFace6"); // Dog knappen
var callFace7 = document.getElementById("callFace7"); // URL fältet läses in.
var test = document.getElementById("Test");

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
        ctx.drawImage(img, 10, 10, 360, 280);

    };

    var xhr = new XMLHttpRequest();
    xhr.open('Get', '/api/FaceNewApi/?URL=' + callFace, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText.split(",");
            alert(response);
            ctx.drawImage(img, 10, 10, 360, 280);
            var x =parseInt(response[1])*(360/594);
            var y = parseInt(response[2]) * (280 / 396);
            test.innerHTML = x + "<->" + y;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.strokeStyle = "yellow";
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.stroke();
          
        }
    }
    xhr.send();

}
/*
    Se fördjupad dokumentation för detta AJAX eller snarare ett AJAJ anrop anrop, https://msdn.microsoft.com/en-us/library/ms535874(v=vs.85).aspx
    Se också grundläggande förklaring om XMLHTTPRequest() https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
    Se var img = new Image() från http://www.i-programmer.info/programming/graphics-and-imaging/2078-canvas-bitmap-operations-bitblt-in-javascript.html
*/