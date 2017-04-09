﻿// Knapparna till val av ansiktsbild
var callFace1 = document.getElementById("callFace1"); // Picture1 knappen
var callFace2 = document.getElementById("callFace2"); // Picture2 knappen
var callFace3 = document.getElementById("callFace3"); // Picture3 knappen
var callFace4 = document.getElementById("callFace4"); // Picture4 knappen
var callFace5 = document.getElementById("callFace5"); // Picture5 knappen
var callFace6 = document.getElementById("callFace6"); // Dog knappen
var submitPicture = document.getElementsByName("submitPicture");

var inputImgUrl = document.getElementById("imageUrl");
var outputImg = document.getElementById("Picture");
var getFaceDataButton = document.getElementById("faceUrl");

submitPicture.addEventListener("click", function () { outputImg.src = inputImgUrl.value });

getFaceDataButton.addEventListener(

    "click",    // Argument 1 till metoden/händelsen addEventListner, object.addEventListener( Arggument1, Argument2);

    function () // Argument 2 till metoden/händelsen addEventListner, function(){...}
    {
        outputImg.src = inputImgUrl.value;
        outputText.innerHTML = "";
        var xhr = new XMLHttpRequest(); //Se fördjupad dokumentation för detta AJAX eller snarare ett AJAJ anrop anrop, https://msdn.microsoft.com/en-us/library/ms535874(v=vs.85).aspx
                                        // Se också grundläggande förklaring om XMLHTTPRequest() https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
        if (!xhr) {
                        alert('Giving up :( Cannot create an XMLHTTP instance');
                        return false;
                  }

        //xhr.open('GET', '/api/FaceNewApi');
                                            /*
						                        open(method,url,async,user,psw)	Specifies the request

						                        method: the request type GET or POST
						                        url: the file location
						                        async: true (asynchronous) or false (synchronous)
						                        user: optional user name
						                        psw: optional password
				                            */
        xhr.open('POST', '/api/FaceNewApi');
        xhr.send(null); /*
                            send()	Sends the request to the server. Used for GET requests
                            send(string)	Sends the request to the server. Used for POST requests
                        */

        xhr.timeout = 2000;

        xhr.onload = function () {
                                    var face = JSON.parse(xhr.responseText);//responseText -> Returns the response data as a string
                                                                            //responseXML -> Returns the response data as XML data
                                                                            //JSON.parse(...) Convert responseText to JSON format.
                                    for (var i = 0; i < face.length; i++) { outputText.innerHTML += face[i]; }

                                    //xhr.onload = function () {
                                    //    var face = xhr.responseText;
                                    //    outputText.innerHTML = face;
                                    //};
                                    //console.log(face); Kollar bara vad som kommer ut ur face.
                                    xhr.ontimeout = function (e) { outputTemp.innerHTML = "Time exceded 2 seconds. Försök igen."; }
                                }

    });