// 1.Make indico display top result --> Views.py
// 2.Load respective landing page --> Views.py or Indico.js function?
// 3.Add ensemble model --> Views.py

function getIndico() {
  var input = document.getElementById("userInput").value;
  $.post("indico/",{
    data: input, // What is input?
  },
   function(result, status){ // collects the result from the indico function in views.py?

       console.log(result);
       if (result == "explorer") {
         window.location.replace("https://warm-coast-39959.herokuapp.com/explorer/");
         // $( "#result" ).load( "/analyst/" );
      } else if (result == "diplomat") {
        window.location.replace("https://warm-coast-39959.herokuapp.com/diplomat/");
      } else if (result == "analyst") {
        window.location.replace("https://warm-coast-39959.herokuapp.com/analyst/");
      } else if (result == "sentinel") {
        window.location.replace("https://warm-coast-39959.herokuapp.com/sentinel/");
      }
      // http://127.0.0.1:8000/analyst/
      // https://warm-coast-39959.herokuapp.com/sentinel/
      // document.getElementById("result").innerHTML = result; // Assigning the result to the HTML element Id = "result"
    });
}

//function predictMbti() {
    // Getting the text input
    //var input = document.getElementById("userInput").value;

    //return false;

//}

/*

''' def keyWithMaxVal(d):
         """ a) create a list of the dict's keys and values;
             b) return the key with the max value"""
         v=list(d.values())
         k=list(d.keys())
         print (v.index(max(v)))
         return k[v.index(max(v))]

    def combPercent(a): #takes in the dictionary, outputs the 4 probabilities and it's highest class

        w = (a['commander'] + a['debater'] + a['logician'] + a['architect'])
        x = (a['mediator'] + a['protagonist'] + a['advocate'] + a['campaigner'])
        y = (a['virtuoso'] + a['entrepreneur'] + a['entertainer'] + a['adventurer'])
        z = (a['consul'] + a['logistician'] + a['executive'] + a['defender'])

        vect = [w,x,y,z]

    print (w)
    print (x)
    print (y)
    print (z)
    b = max(vect)
    if b == w:
        print ('Analyst')
    if b == x:
        print ('Diplomat')
    if b == y:
        print ('Explorer')
    if b == z:
        print ('Sentinel')

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
