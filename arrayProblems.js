function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//isUniform

function isUniform(arr) {
    //make first variable equal to the first item
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}
//forEach isn't good here becuase it would run a bad code. Look to solution set as to why forEach would not work.


//sumArray 
function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
}

//max

function max(arr) {
    for (var i = 1; i <arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}




