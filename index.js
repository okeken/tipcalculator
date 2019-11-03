
var bill = document.querySelector("#billAmt").value;
var serviceQuality = document.querySelector("#serviceQual").value;
var proposed = document.querySelector("#proposedAmt").value;
var people = document.querySelector("#numberOfPeople").value;

function calculateTip (addEventListener){
addEventListener.preventDefault();

//declaration of input variables//

var bill = document.querySelector("#billAmt").value;
var serviceQuality = document.querySelector("#serviceQual").value;
var proposed = document.querySelector("#proposedAmt").value;
var people = document.querySelector("#numberOfPeople").value;





 //validate input
  if (bill === "" || serviceQuality == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
    document.querySelector("#reload").style.display = "block";

  } else {
    document.getElementById("each").style.display = "block";
  }



//declaration of tip calculator formulae

//Calculate tip
  var tipcalculate = ((bill * serviceQuality) / people)+(0.2*proposed)

  //round to two decimal places
  tipcalculate = Math.round(tipcalculate * 100) / 100;

  //next line allows us to always have two digits after decimal point
  tipcalculate = tipcalculate.toFixed(2);





//Tip Show
document.querySelector("#tip").innerHTML = tipcalculate;
document.querySelector("#hideCalc").style.display = "none";
document.querySelector("#tipShow").style.display = "block";
document.querySelector("#reload").style.display = "block";


}


//Hide Tip Section on load//

document.querySelector("#tipShow").style.display = "none";
document.querySelector("#reload").style.display = "none";
document.querySelector(".divi").style.display = "none";


//calling the calculate function

document.querySelector("#calculate").addEventListener("click", calculateTip);


function calcloading(addEventListener) {
	addEventListener.preventDefault();

        document.querySelector(".bubbly-button").innerHTML = "Loading";
        document.querySelector(".bubbly-button").classList.add('divi');
        
      setTimeout( 
            function  (){  
                document.querySelector(".bubbly-button").classList.remove('divi');
                document.querySelector(".bubbly-button").innerHTML = "Signed In";
                
            }, 6000);
    };

document.querySelector(".bubbly-button").addEventListener("click", calcloading);
