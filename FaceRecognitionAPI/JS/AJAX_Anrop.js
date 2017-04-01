
var callFace = document.getElementById("callFace");
var outputText = document.getElementById("resultatText");


callFace.addEventListener(

    "click",    // Argument 1 till metoden/händelsen addEventListner, object.addEventListener( Arggument1, Argument2);

    function () // Argument 2 till metoden/händelsen addEventListner, function(){...}
    {
        outputText.innerHTML = "";
        var xhr = new XMLHttpRequest(); //Se fördjupad dokumentation för detta AJAX eller snarare ett AJAJ anrop anrop, https://msdn.microsoft.com/en-us/library/ms535874(v=vs.85).aspx
        // Se också grundläggande förklaring om XMLHTTPRequest() https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp
        if (!xhr) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        xhr.open('GET', '/api/FaceNewApi'); /*
						                        open(method,url,async,user,psw)	Specifies the request

						                        method: the request type GET or POST
						                        url: the file location
						                        async: true (asynchronous) or false (synchronous)
						                        user: optional user name
						                        psw: optional password
				                            */
        xhr.send(null); /*
                            send()	Sends the request to the server. Used for GET requests
                            send(string)	Sends the request to the server. Used for POST requests
                        */

        xhr.timeout = 2000;

        xhr.onload = function () {
            var face = JSON.parse(xhr.responseText);//responseText -> Returns the response data as a string
                                                    //responseXML -> Returns the response data as XML data
            for (var i = 0; i < face.length; i++) { outputText.innerHTML += face[i]; }

            //xhr.onload = function () {
            //    var face = xhr.responseText;
            //    outputText.innerHTML = face;
            //};

            xhr.ontimeout = function (e) { outputTemp.innerHTML = "Time exceded 2 seconds. Försök igen."; }
        }

    });