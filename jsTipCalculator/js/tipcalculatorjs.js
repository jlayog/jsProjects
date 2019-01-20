// script.js

// function
function calculateTip() {
    //store data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    // Quick validation
    if(billAmount === "" || serviceQuality == 0 ) {
        return window.alert("Please enter a value."); // Will prevent function from continuing
    }
    
    // Check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
        
    } else {
        
        document.getElementById("each").style.display = "block";
        
    }
    
    // Math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    //Display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
    
 }


// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


// Call function
document.getElementById("calculate").onclick = function() { calculateTip(); };















