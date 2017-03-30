// Method 1: Dont use response, manually add probabilities (Tony)
// Method 2: Use response, showing it on a new text on the app
// var indico = require('indico.io');
// indico.apiKey =  '584f26a05ca718f8387fcc7ed6d845f4';
// var response = function(res) { console.log(res); }
// var logError = function(err) { console.log(err); }
//
// var response2 = function(res) { alert(res); }
//
// var generatedText;
//
// indico.personas("I only stay home on Saturday nights to read.")
//   .then(function(response){console.log(response);});
function getIndico() {
  var input = document.getElementById("userInput").value;
  $.post("indico/",{
    data: input,
  },
   function(result, status){
        console.log(result);
        document.getElementById("result").innerHTML = result;
    });
}
function predictMbti() {
    // Getting the text input
    var input = document.getElementById("userInput").value;

    // alert("Text is " + input);

    // var response = function(res) { alert("The predicted MBTI type is: " + res); }
    // var logError = function(err) { alert("The predicted MBTI type is: " + err); }
    // indico.personas(input)
    //   .then(response2)
    //   .catch(logError);

    // indico.personas("I only stay home on Saturday nights to read.")
    //   .then(function(response){alert(response);});
      // .catch(logError);

    // single example
    // indico.personas("I only stay home on Saturday nights to read.")
    //   .then(response)
    //   .catch(logError);

    // var prediction = indico.personas(input).then(response);
    // alert("The predicted MBTI type is: " + prediction);
    //
    // indico.personas("hello there my name is tony").then(response);
    //
    // var a = indico.personas("hello there my name is tony").then(response);
    // alert("The predicted MBTI type is: " + a);
    //
    // // var prediction = combPercent(a);
    // var input2 = document.getElementById("resultDiv").innerHTML = person.getFullAddress();

    // alert("The predicted MBTI couldnt work :( " );

    return false;

    // alert: text input is: ... (DONE)
    // passing text input through API
    // 4 x (if output of API = ...) --> load .html

}

/*
// convert to class
  dictClass = {'commander': 'Analyst',
          'debater': 'Analyst',
          'defender': 'Sentinel',
          'mediator': 'Diplomat',
          'executive': 'Sentinel',
          'advocate': 'Diplomat',
          'logician': 'Analyst',
          'protagonist': 'Diplomat',
          'virtuoso': 'Explorer',
          'architect': 'Analyst',
          'consul': 'Sentinel',
          'campaigner': 'Diplomat',
          'adventurer': 'Explorer',
          'entertainer': 'Explorer',
          'entrepreneur': 'Explorer',
          'logistician': 'Sentinel',
          }


//convert to number
  dictNum = {'commander': 1,
          'debater': 1,
          'defender': 4,
          'mediator': 2,
          'executive': 4,
          'advocate': 2,
          'logician': 1,
          'protagonist': 2,
          'virtuoso': 3,
          'architect': 1,
          'consul': 4,
          'campaigner': 2,
          'adventurer': 3,
          'entertainer': 3,
          'entrepreneur': 3,
          'logistician': 4,
          }


// 1 analyst, 2 diplomat, 3 explorer, 4 sentinel
function combPercent(a) {


  var w = (a['commander'] + a['debater'] + a['logician'] + a['architect']);
  var x = (a['mediator'] + a['protagonist'] + a['advocate'] + a['campaigner']);
  var y = (a['virtuoso'] + a['entrepreneur'] + a['entertainer'] + a['adventurer']);
  var z = (a['consul'] + a['logistician'] + a['executive'] + a['defender']);

  var vect = [w,x,y,z];

// test by combining all 4 percentages for each of the 4 classes, seeing if there is a difference.

  var b = vect.max();
  var c;

  if b == w:
      c = 'Analyst';
  if b == x:
      c = 'Diplomat';
  if b == y:
      c = 'Explorer';
  if b == z:
      c = 'Sentinel';

  return c;
}
*/
