var indico = require('indico.io');
indico.apiKey =  '584f26a05ca718f8387fcc7ed6d845f4';

var response = function(res) { console.log(res); }

function predictMbti()
{
    var input = document.getElementById("userInput").value;
    alert("The text input is: " + input);

    prediction = indico.personas(input).then(response);
    alert("The predicted MBTI type is: " + prediction);

    return false;

    // alert: text input is: ... (DONE)
    // passing text input through API
    // 4 x (if output of API = ...) --> load .html

}
